import { NativeSelect,FormControl} from '@material-ui/core';
import React, { useEffect, useState, useRef,Component } from "react";
import styles from './CountryPicker';
import axios from "axios";
import { element } from 'prop-types';
const CountryPicker=({handlChangeContry})=>{
    const ApiCountry="https://covid19.mathdro.id/api/countries"
    const [countries,setCountries]=useState([])
    useEffect(()=>{
           axios.get(ApiCountry)
           .then((response)=>{
             setCountries(response.data.countries.map((element)=>element.name))
           })
    },[setCountries])
    console.log(countries)
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(event)=>handlChangeContry(event.target.value)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        
        </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;