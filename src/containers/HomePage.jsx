import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import CardMovie from "../components/CardMovie";
import {Box, Typography } from "@mui/material";
import {Credentials} from '../data/Credentials';
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const coin = Credentials();
  const [movies, setMovies] = useState([])
  

  useEffect(()=>{
    // const fetchDataMovies= async()=>{
    //     try{
    //     const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    //       headers: {
    //         'X-CMC_PRO_API_KEY': 'a84fec87-413f-4b80-8b75-8b353204bd44',
    //       },
    //     });
    //     setMovies(response.data.results);
    //     }catch(err){
    //         console.log("Error", err)
    //     }
    // }; 
    // fetchDataMovies();
    // var params = "?&id=1"
    let response = null;
    const arrIndex = [];
    for (let index = 1; index < 11; index++) {
      arrIndex.push(index);
    }
    const indexCoin = arrIndex.join(',');
    new Promise(async (resolve, reject) => {
      try {
        response = await axios.get('/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY' : coin.ClientSecret,
            // "Access-Control-Allow-Origin": "localhost:3000",
            // "Access-Control-Allow-Headers": "Content-Type",
            // "Access-Control-Allow-Methods": "GET, POST",
          },
        });
      } catch(ex) {
        response = null;
        // error
        // console.log(ex);
        // reject(ex);
      }
      if (response) {
        // success
        const json = response.data;
        console.log(json);
        resolve(json);
      }
    });

},[]);

  return (
    <>
    
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center', fontWeight: 'bold', marginTop: '1em'}}>Today's Cryptocurrency Prices by Market Cap</Typography>
        </Box>
      <Box className={styles.container}>
        {movies.map((movie)=>{
                return <Link key={movie.id} to={`/movies/${movie.id}`} style={{textDecoration: 'none'}}><CardMovie key={movie.id} propsMovie={movie}/>
                </Link>             
             })}
      </Box>
    </>
  );
};

export default HomePage;