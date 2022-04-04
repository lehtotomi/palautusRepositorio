
import DeleteButton from './DeleteButton'

const Numbers = ( {numbers, filter, setPersons} ) => {
    return (
      <ul>
        {numbers.filter(
          number => number.name.toLowerCase().includes(filter)).map(
            number => <li key={number.name}>
                        {number.name} {number.number}
                        <DeleteButton
                          person={number}
                          setPersons={setPersons}
                          persons={numbers}
                        /> 
                      </li>
        )}
      </ul>
    )
}

export default Numbers