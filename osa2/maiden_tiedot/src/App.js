import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import FilterForm from './components/FilterForm'

function App() {
  const [countries, setCountries] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const [newFilter, setFilter] = useState('')
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <FilterForm 
        setFilter={setFilter}
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}/>
      <Countries coutries={countries} filter={newFilter} />
    </div>
    
  )
  //<Countries coutries={countries} filter={newFilter} />
}

export default App;
