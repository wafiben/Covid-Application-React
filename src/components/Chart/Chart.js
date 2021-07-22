import React, { useEffect, useState, useRef, Component } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = ({ props }) => {
  const apiOfDailyData = "https://covid19.mathdro.id/api/daily";
  const [dailyData, setdailyData] = useState({
    confirmed: [],
    deaths: [],
    date: [],
  });

  useEffect(() => {
    axios
      .get(apiOfDailyData)
      .then((response) => {
        setdailyData({
          confirmed: response.data.map((element) => element.totalConfirmed),
          deaths: response.data.map((element) => element.deaths.total),
          date: response.data.map((element) => element.reportDate),
        });
      })
      .catch((error) => console.log(error));
  }, []);
  if (!props) {
    return "wait for it";
  }

  const LineChart =
    Object.entries(dailyData).length > 0 ? (
      <Line
        data={{
          labels: dailyData.date.map((element) => element),
          datasets: [
            {
              data: dailyData.confirmed.map((element) => element),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.deaths.map((element) => element),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  const BarChart =
    Object.entries(props).length > 0 ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "deaths"],
          datasets: [
            {
              label: "",
              backgroundColor: [
                'rgba(0,0, 255, 0.5)',
                "rgba(0,255,0 , 0.5)",
                "rgba(255,0,0 , 0.5)",'#FFF8DC',
              ],
              data: [
                props.confirmed.value,
                props.recovered.value,
                props.deaths.value,
              ]
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: false, text: `Current state in  ${props.country} `},
        }}
      />
    ) : null;

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      {props.country ? BarChart : LineChart}
    </div>
  );
};
export default Chart;
