import React, { useState, useEffect } from "react";

import { Box} from "@mui/material";


// import {auth} from "../authentication/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

import axios from "axios";
import {Credentials} from '../data/Credentials';
import CardMovieDetail from "../components/CardMovieDetail";

import {useParams} from "react-router-dom";


const DetailPage = () => {
  const coin = Credentials();
  let param= useParams();

  const [movie, setMovie] = useState({})
  
  
  useEffect(()=>{
   
    // const fetchDataMovies= async()=>{
      
    //   try{
    //   const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    //     headers: {
    //       'X-CMC_PRO_API_KEY': 'a84fec87-413f-4b80-8b75-8b353204bd44',
    //     },
    //   });
    //   setMovie((response.data.results).find((mov)=> mov.id === parseInt(param.id)));
    //   console.log(param.id)
    //   }catch(err){
    //       console.log("Error", err)
          
    //   }
    // }; 
    // fetchDataMovies();
    // console.log(param.poster_path);
    // console.log(movie?.title);

    let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY' : coin.ClientSecret,
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "Content-Type",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});

  },[]);
  // console.log(movie?.title);
  return (
    <>
      <Box styles={{
        padding: '1em',
        margin: '1em 0em',
        border: '1px dashed grey',
      }}>
      <CardMovieDetail key={movie?.id} propsMovie={movie}/>
      </Box>
    </>
  );
};

export default DetailPage;