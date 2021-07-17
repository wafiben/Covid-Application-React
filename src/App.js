import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

const url = "https://covid19.mathdro.id/api";
function App() {
  const [state,setstate]=useState({})
  var dataFromApi = {};
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dataFromApi = {
          ...dataFromApi,
          confirmed: response.data.confirmed,
          recovered: response.data.recovered,
          deaths: response.data.deaths,
          lastUpdate: response.data.lastUpdate,
        };
        setstate(dataFromApi);
        console.log(dataFromApi);
      })
      .catch((error) => console.log(error));
  }, []);
  function handlChangeContry(country)
  {
    const ApiOfSpeceficCountry=`https://covid19.mathdro.id/api/countries/${country}`
    axios.get(ApiOfSpeceficCountry).then((response)=>{
      console.log(response)
      setstate({confirmed:response.data.confirmed,
        recovered:response.data.recovered,
         deaths: response.data.deaths,
          lastUpdate: response.data.lastUpdate,
    })})
     console.log(country)
  }
  return (
    <div className="container">
      <Cards details={state} />
      <CountryPicker handlChangeContry={handlChangeContry} />
      <Chart /> 
    </div>
  );
}

export default App;
