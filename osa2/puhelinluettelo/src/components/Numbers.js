const Numbers = ( {numbers, filter} ) => {
    return (
      <ul>
        {numbers.filter(
          number => number.name.toLowerCase().includes(filter)).map(
            number => <li key={number.name}>
                        {number.name} {number.number}
                      </li>
        )}
      </ul>
    )
}

export default Numbers