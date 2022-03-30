const Numbers = ( {numbers, filter} ) => {
  
    const Number = ( { number } ) => {
      return (
        <li>
          {number.name} {number.number}
        </li>
      )
    }
  
    return (
      <ul>
        {numbers.filter(
          number => number.name.toLowerCase().includes(filter)).map(
            number => <Number key={number.name} number={number} />
        )}
      </ul>
    )
}

export default Numbers