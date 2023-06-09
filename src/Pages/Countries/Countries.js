import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    })
    return (

        <div className='container'>
            <h1 className='header'>Show All Country: <span className='colorr'>({countries.length})</span></h1>
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            singleCountry={country}></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;