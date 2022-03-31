
const Countries = ( {coutries, filter} ) => {
    const coutries2 = coutries.filter(
      country => 
        country.name.common
          .toLowerCase()
          .includes(filter)
    )
    if (coutries2.length > 10) {
      return (
        <>
          <p> Too many countries to list them all! :( </p>
        </>
      )
    } else if (coutries2.length > 1) {
      return (
        <ul>
        {coutries2.map(
          country => (
            <li key={country.name.common}> 
                {country.name.common}
            </li>
          ))}
        </ul>
      )
    } else {
      return (
        <div>
        {coutries2.map(
            country => (<div>
                            <h2> {country.name.common} </h2>
                            capital: {country.capital}<br/>
                            area: {country.area}<br/>
                            population: {country.population}<br/>
                            <h3> languages:</h3>
                            <ul>
                            {Object.values(country.languages)
                                .map(val => //console.log(val))
                                <li key={val}>
                                    {val}
                                </li>
                            )}
                            </ul>
                            <br/>
                            <img 
                            src={country.flags.png}
                            alt="flag"
                            />
                        </div>         
        ))[0]}
        </div>
      )
    }
}

export default Countries