import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

const url = "https://covid19.mathdro.id/api";
function App() {
  const [state,setstate]=useState({})
  var data = {};
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        data = {
          ...data,
          confirmed: response.data.confirmed,
          recovered: response.data.recovered,
          deaths: response.data.deaths,
          lastUpdate: response.data.lastUpdate,
        };
        setstate(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <Cards data={state} />
      <CountryPicker />
      <Chart /> 
    </div>
  );
}

export default App;
