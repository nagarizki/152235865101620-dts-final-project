import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { logout } from "../authentication/firebase"

import {Routes, Route, Link} from 'react-router-dom';


// import About from "../containers/About"


// Di sini kita akan menggunakan useNavigate untuk bisa keluar dari halaman HomePage dan
// beralih ke halaman Login
import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  // Gunakan hooks useNavigate
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async() => {
    await logout();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.grow}>
          <Routes>
            {/* <Route path="/" element={<App/>} /> */}
            <Route path="about" element={<About />} />
            {/* <Route path="*" element={<h1>404 - Halaman tidak ditemukan</h1>} /> */}
            
          </Routes>
      
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}> Home</Link>
            <Link  style={{marginLeft:"0.5em", textDecoration: 'none', color: 'white'}} to="about"> About</Link>
          
            
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

function About(){
  return (
    <>
    {/* <Link to="/" style={{textDecoration: 'none', color: 'white'}}> Home</Link> */}
    {/* <Link  style={{marginLeft:"0.5em", textDecoration: 'none', color: 'white'}} to="about"> About</Link> */}
    </>
  )
}


export default NavBar;
