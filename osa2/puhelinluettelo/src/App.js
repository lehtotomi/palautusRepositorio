import { useState, useEffect } from 'react'
import AddPersonForm from './components/AddPersonForm'
import FilterForm from './components/FilterForm'
import Numbers from './components/Numbers'
import axios from 'axios'
import NumberService from './components/NumberService'

const App = () => {
  
  useEffect(() => {
    NumberService
    .getAll()
    .then(response => {
        setPersons(response)
      })
  },[])

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
      NumberService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    } else {
      let oldPerson = persons.find(p => p.name === personObject.name)
      let msg = `${personObject.name} is already in the phonebook! Replace the old phonenumber?`
      if (window.confirm(msg)){
            NumberService
              .replace(oldPerson, personObject)
                .then(response => 
                  setPersons(
                    persons.map(
                      p => 
                        p.name === personObject.name 
                          ? {...p, number: personObject.number} : p
                    )
                  )
                )
          }
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
      
      <Numbers 
        numbers={persons}
        filter={newFilter} 
        setPersons={setPersons}
      />

    </div>
  )
}

export default App