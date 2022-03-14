import { useState } from 'react'

const Header2 = ( { text } ) => <h2> {text} </h2>

const Number = ( {number} ) => {
  return (
    <li>
      {number.name}
    </li>
  )
}
const Numbers = ( {numbers} ) => {
  return (
    <ul>
      {numbers.map(
        number => <Number key={number.name} number={number}/>
      )}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'
    }
  ]) 
  
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    if (!persons.some(p => p.name === nameObject.name)){
      setPersons(persons.concat(nameObject)) 
    } else {
      alert(`${nameObject.name} is already added to the phonebook!`);
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <Header2 text='Phonebook'/>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <Header2 text='Numbers'/>
      <Numbers numbers={persons}/>
    </div>
  )
}

export default App