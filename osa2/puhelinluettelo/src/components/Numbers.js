
import DeleteButton from './DeleteButton'

const Numbers = ( {numbers, filter, setPersons, setSuccessNotification} ) => {
    return (
      <ul>
        {numbers.filter(
          number => number.name.toLowerCase().includes(filter)).map(
            number => <li key={number.name}>
                        {number.name} {number.number}
                        <DeleteButton
                          person={number}
                          persons={numbers}
                          setPersons={setPersons}
                          setSuccessNotification={setSuccessNotification}
                        /> 
                      </li>
        )}
      </ul>
    )
}

export default Numbers