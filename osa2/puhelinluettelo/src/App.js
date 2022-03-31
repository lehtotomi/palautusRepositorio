import { useState, useEffect } from 'react'
import AddPersonForm from './components/AddPersonForm'
import FilterForm from './components/FilterForm'
import Numbers from './components/Numbers'
import axios from 'axios'

const App = () => {
  
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: "0404040"
    },
    { name: 'Matti Meikäläinen',
      number: '903285743957'
    },
    { name: 'Aku Ankka',
      number: '313'
    }
  ])  
  
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if (!persons.some(p => p.name === personObject.name)){
      setPersons(persons.concat(personObject)) 
    } else {
      alert(`${personObject.name} is already added to the phonebook!`);
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [newFilter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2> Phonebook </h2>
      
      <FilterForm 
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      
      <h2> Add a new contact </h2>

      <AddPersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      
      <h3> Numbers </h3>
      
      <Numbers numbers={persons} filter={newFilter} />
    </div>
  )
}

export default App