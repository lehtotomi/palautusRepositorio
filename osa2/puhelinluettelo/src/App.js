import { useState } from 'react'

const Header2 = ( { text } ) => <h2> {text} </h2>

const Number = ( { number } ) => {
  return (
    <li>
      {number.name} {number.number}
    </li>
  )
}
const Numbers = ( {numbers, filter} ) => {
  return (
    <ul>
      {numbers.filter(
        number => number.name.includes(filter)).map(
          number => <Number key={number.name} number={number}/>
      )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: "0404040"
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
      <Header2 text='Phonebook'/>
      <div>
        filter shown with 
        <input 
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>  
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div> 
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <Header2 text='Numbers'/>
      <Numbers numbers={persons} filter={newFilter}/>
    </div>
  )
}

export default App