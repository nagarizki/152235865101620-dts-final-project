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
    const fetchDataMovies= async()=>{
        try{
        const response = await axios.get('/listings/latest', {
          headers: {
            'X-CMC_PRO_API_KEY': coin.ClientSecret,
          },
        });
        setMovies(response.data.results);
        }catch(err){
            console.log("Error", err)
        }
    }; 
    fetchDataMovies();
  },[]);

  return (
    <>
    
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center', fontWeight: 'bold', marginTop: '1em'}}>Today's Cryptocurrency Prices by Market Cap</Typography>
        </Box>
      <Box className={styles.container}>
        {/* {movies.map((movie)=>{
                return 'aaaa'            
             })} */}
      </Box>
    </>
  );
};

export default HomePage;