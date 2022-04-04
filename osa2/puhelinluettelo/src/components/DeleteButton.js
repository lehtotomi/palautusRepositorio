import NumberService from './NumberService'

const DeleteButton = ( { person, setPersons, persons} ) => {
    return (
      <button onClick={() => 
                            {if (window.confirm(`Delete ${person.name}'s number?`)){
                                NumberService.remove(person)
                                setPersons(persons
                                    .filter(p => p.id != person.id))
                                }
                            }
                        }>
        delete
      </button>
    )
}

export default DeleteButton