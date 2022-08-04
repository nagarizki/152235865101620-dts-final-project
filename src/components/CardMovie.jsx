import React from 'react';

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
  Button,
} from '@mui/material'

//The Movie DataBase (TMDB)
const urlDepanPosterpath= "https://image.tmdb.org/t/p/w200";

const CardMovie =({propsMovie})=> {
  return (
    <>
      <Card className="boxy">
        <Box>
          {/* <Typography variant="h6">Component CardMovie</Typography> */}
        </Box>
        <Box className="boxy" sx={{display:"flex", flexDirection:"row", alignItems:"center", margin: '2em'}}>
            <CardMedia component="img"
            sx={{width:151}}
            image={`${urlDepanPosterpath}${propsMovie.poster_path}`}
            alt="poster"
            ></CardMedia>
            <CardContent>
              <Typography variant="body1">{propsMovie.title}</Typography>
              <Box sx={{display: 'flex' , flexDirection: 'inline', marginBottom: '1em', textAlign: 'center'}}>
                <Button variant='contained' sx={{marginRight: '1em'}} size='small' >Detail</Button>
                <Rating value={propsMovie.vote_average/2} precision={0.1}/>
              </Box>
              <Typography variant="body1">{propsMovie.overview}</Typography>
              
            </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default CardMovie;