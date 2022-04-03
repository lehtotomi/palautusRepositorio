const Countries = ( {coutries, filter, setFilter} ) => {

  const CountryStats = ({country}) => {
    return(
       <div>
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
    )
  }

  const ShowCountryButton = ( { country, setFilter } ) => {
    return (
      <button onClick={() => setFilter(country.name.common)}>
        show
      </button>
    )
  }

  const coutries2 = coutries.filter(
      country => 
        country.name.common
          .toLowerCase()
          .includes(filter.toLowerCase())
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
                <ShowCountryButton country={country} setFilter={setFilter}/> 
            </li>
          ))}
        </ul>
      )
    } else if (coutries2.length === 1) { 
      return (
        <CountryStats country={coutries2[0]} />
      )
    } else {
      <>
        <p> No matches! :( </p>
      </>
    }
}

export default Countries