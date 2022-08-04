import React from 'react';

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from '@mui/material'

//The Movie DataBase (TMDB)
const urlDepanPosterpath= "https://image.tmdb.org/t/p/w200";

const CardMovie =({propsMovie})=> {
  return (
    <>
      <Card className="boxy" sx={{maxWidth: '1000px', margin: 'auto'}}>
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center', fontWeight: 'bold'}}>Detail Movie</Typography>
        </Box>
        <Box className="boxy" sx={{display:"flex", flexDirection:"row", alignItems:"center", margin: '2em'}}>
            <CardMedia component="img"
            sx={{width:151}}
            image={`${urlDepanPosterpath}${propsMovie.poster_path}`}
            alt="poster"
            ></CardMedia>
            <CardContent>
              <Typography variant="body1">{propsMovie.title}</Typography>
              <Box sx={{display: 'flex' , flexDirection: 'inline', textAlign: 'center'}}>
              <Rating value={propsMovie.vote_average/2} precision={0.1}/>
              </Box>
              <Typography variant="body1">Vote Count: {propsMovie.vote_count}</Typography>
              <Typography variant="body1">Popularity: {propsMovie.popularity}</Typography>
              <Typography variant="body1">Release Date: {propsMovie.release_date}</Typography>
              <Typography variant="body1" style={{marginBottom: '2em'}}>Original Language: {propsMovie.original_language}</Typography>
              <Typography variant="body1">{propsMovie.overview}</Typography>
            </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default CardMovie;