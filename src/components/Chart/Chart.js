import React, { useEffect, useState, useRef,Component } from "react";
import axios from "axios";
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';
const Chart=()=>{
    const api="https://covid19.mathdro.id/api/daily";
   /*  const [dailyData,setdailyData]=useState({}); */
   const[dailyData,setdailyData]=useState({})
    
    useEffect(()=>{
      const fetchApi=async () =>{
        setdailyData(await fetchDailyData())
      }
      fetchApi(dailyData);
      console.log(dailyData)

      
        /* dailyData={confirmed:response.data.map((element)=>element.totalConfirmed),
          deaths:response.data.map((element)=>element.deaths.total),
          date:response.data.map((element)=>element.reportDate) } */
      
    
      /* axios.get(api).then((response)=>{
        
        console.log(response.data)
        dailyData={confirmed:response.data.map((element)=>element.totalConfirmed),
          deaths:response.data.map((element)=>element.deaths.total),
          date:response.data.map((element)=>element.reportDate) }
      }).catch((error)=>console.log(error)) */
      
    },[]);
  
 /*    const LineChart=(
      <Line data={{labels:dailyData.map(({date})=>date),
      datasets:[{data:dailyData.map(({confirmed})=>confirmed),
        label:'Infected',
        borderColor:'#3333ff',
        fill:true

      },{data:dailyData.map(({deaths})=>deaths),
        label:'Deaths',
        borderColor:'red',
        backgroundColor:'rgba(255,0,0,0.5)',
        fill:true}]}}/>
    )  */
    
   
 
     
    return (
       <div className={styles.container}>
         
         <h1>hello</h1>
          {/*  {LineChart} */}
      
   
    </div>
  
    )
}
export default Chart;