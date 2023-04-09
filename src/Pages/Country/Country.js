import React from 'react';
import './Country.css'

const Country = ({ singleCountry }) => {
    // console.log(singleCountry);
    const { name, population, flags, capital, region } = singleCountry;
    // console.log(name.common);
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3 className='white topp'><span className='name'>{name.common}</span></h3>
            <p className='white'>Capital: {capital}</p>
            <p className='white'>Population: {population}</p>
            <p className='white'>Region: {region}</p>
        </div>
    );
};

export default Country;