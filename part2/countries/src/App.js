import React, { useState, useEffect } from "react";
import axios from "axios";

import Weather from "./components/Weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(e.target.attributes.country.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
      console.log(res.data[0]);
    });
  }, []);

  let filteredCountry = countries.filter((country) =>
    country.name.toUpperCase().match(filter.toUpperCase())
  );

  if (filteredCountry.length > 10) {
    return (
      <div>
        find countries <input value={filter} onChange={handleChange} />
        <p>Too many matches, please specify the filter</p>
      </div>
    );
  }

  if (filteredCountry.length < 10 && filteredCountry.length !== 1) {
    return (
      <div>
        find countries <input value={filter} onChange={handleChange} />
        <ul>
          {filteredCountry.map((country) => (
            <li>
              {country.name}
              <button country={country.name} onClick={handleClick}>
                show
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (filteredCountry.length === 1) {
    return (
      <div>
        find countries <input value={filter} onChange={handleChange} />
        <h2>{filteredCountry[0].name}</h2>
        <p>capital {filteredCountry[0].capital}</p>
        <p>population {filteredCountry[0].population}</p>
        <br />
        <h2>Languages</h2>
        <ul>
          {filteredCountry[0].languages.map((language) => (
            <li>{language.name}</li>
          ))}
        </ul>
        <img src={filteredCountry[0].flag} height="150" width="200" />
        <br />
        <h2>Weather in {filteredCountry[0].capital}</h2>
        <Weather capital={filteredCountry[0].capital} />
      </div>
    );
  }
};

export default App;
