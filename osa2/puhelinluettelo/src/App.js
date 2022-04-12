import { useState, useEffect } from 'react'
import AddPersonForm from './components/AddPersonForm'
import FilterForm from './components/FilterForm'
import Numbers from './components/Numbers'
import NumberService from './components/NumberService'
import Notification from './components/Notification'

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
  
  const [errorMessage, setErrorMessage] = useState(null)

  const [successMessage, setSuccessMessage] = useState(null)

  const [newName, setNewName] = useState('')

  const setNotification = ( message, type ) =>  {
    if (type === 'error'){
      setErrorMessage(message)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    else if (type === 'success'){
      setSuccessMessage(message)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } 
    else {
      alert("INVALID TYPE FOR NOTIFICATION")
    }
  }

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
          setNotification(`Added '${personObject.name}' succesfully!`,'success')
        })
        .catch(error => {
          setNotification(`Adding '${personObject.name}' failed! error: ${error}`, 'error')
        })
    } else {
      let oldPerson = persons.find(p => p.name === personObject.name)
      let msg = `${personObject.name} is already in the phonebook! Replace the old phonenumber?`
      if (window.confirm(msg)){
            NumberService
              .replace(oldPerson, personObject)
                .then(response => { 
                  setPersons(
                    persons.map(
                      p => 
                        p.name === personObject.name 
                          ? {...p, number: personObject.number} : p
                    )
                  )
                  setNotification(`Changing ${oldPerson.name}'s number succeeded!`, 'success')
                })
                .catch(error => {
                  setNotification(`Changing ${oldPerson.name}'s number failed! error: ${error}`, 'error')
                })
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
      <Notification message={errorMessage} type="error" />
      <Notification message={successMessage} type="success" />
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
        setSuccessNotification={setNotification}
      />

    </div>
  )
}

export default App