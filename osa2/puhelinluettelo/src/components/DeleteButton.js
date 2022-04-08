import NumberService from './NumberService'

const DeleteButton = ( { person, persons, setPersons, setSuccessNotification} ) => {
    return (
      <button onClick={() => 
                            {if (window.confirm(`Delete ${person.name}'s number?`)){
                                NumberService.remove(person)
                                setPersons(persons
                                    .filter(p => p.id !== person.id))
                                setSuccessNotification(`Removing ${person.name} succeeded!`,'success')
                                }
                            }
                        }>
        delete
      </button>
    )
}

export default DeleteButton