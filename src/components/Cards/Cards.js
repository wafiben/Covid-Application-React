import React from 'react';
import CountUp from 'react-countup';
import { Card ,CardContent,Typography} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Cards.module.css';
import cx from  'classnames';
const Cards=({details:{confirmed,recovered,deaths,lastUpdate}})=>{
   // console.log(details);
    console.log(confirmed)
    console.log(recovered)
   console.log(lastUpdate) 
    if(!confirmed){
        return '...loading';
    }
    return (
        <div  className={styles.container} >
            <Grid /* container */ /* spacing={3} */ justifyContent="center"  style={{display:'flex',alignItems:'center'}} >
                <Grid item component={Card} xs={12} xm={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" guetterBottom >Infected </Typography>
                    <Typography  variant='h5'>
                     <CountUp start={0} end={confirmed.value} duration='4' separator='.'/>  </Typography>
                    <Typography color="textSecondary" guetterBottom> {new Date(lastUpdate).toDateString()}  </Typography>
                    <Typography  variant='body2'>Number of active cases of COVID-19 </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} xm={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" guetterBottom>Recovered </Typography>
                    <Typography  variant='h5'><CountUp start={0} end={recovered.value} duration='4' seperetor='.'/> </Typography>
                    <Typography color="textSecondary" guetterBottom>{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography  variant='body2'>Number of recoveries from COVID-19 </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} xm={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" guetterBottom>Deaths </Typography>
                    <Typography  variant='h5'> <CountUp start={0} end={deaths.value} duration='4' separator='.'/>  </Typography>
                    <Typography color="textSecondary" guetterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography  variant='body2'>Number of Deaths caused by COVID-19 </Typography>
                </CardContent>
                </Grid>

            </Grid>

        </div>
       
    )
}
export default Cards;