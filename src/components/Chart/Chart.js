import React, { useEffect, useState } from "react";
import axios from "axios";
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css'
const Chart=()=>{
    const api="https://covid19.mathdro.id/api/daily";
    var dailyDatemty=[];
    const [dailyData,setdailyData]=useState({});
    useEffect(()=>{
      axios.get(api).then((response)=>{
          console.log(response.data);
          dailyDatemty=[...dailyDatemty,response.data];
          console.log(dailyDatemty);
          const hop=dailyDatemty.map(({date})=>date)
          console.log(hop)
          console.log(dailyDatemty[0].date);

          
      })
    },[]);
     const LineChart=(
        dailyData[0]?(<Line
        data={{labels:'',
    datasets:[{},{}]}}/>):null)
    
    return (
        <h1>Chart</h1>
    )
}
export default Chart;