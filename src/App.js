import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import conronaImage from "./images/image.png";

const url = "https://covid19.mathdro.id/api";
function App() {
  const [state, setstate] = useState({});
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
      })
      .catch((error) => console.log(error));
  }, []);
  function handlChangeContry(country) {
    const ApiOfSpeceficCountry = `https://covid19.mathdro.id/api/countries/${country}`;
    axios.get(ApiOfSpeceficCountry).then((response) => {
      setstate({
        confirmed: response.data.confirmed,
        recovered: response.data.recovered,
        deaths: response.data.deaths,
        lastUpdate: response.data.lastUpdate,
        country: country,
      });
    });
  }
  if (!state) {
    console.log("still waiting");
  }
  return (
    <div className="container">
      <img
        src={conronaImage}
        alt="coronaImage"
        style={{ width: "370px", marginTop: "50px" }}
      />
      <Cards details={state} />
      <CountryPicker handlChangeContry={handlChangeContry} />
      <Chart props={state} />
    </div>
  );
}

export default App;
