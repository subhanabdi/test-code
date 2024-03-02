import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Nav from "./Nav"
import New from "./New"
import Sidebar from './Sidebar';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Layout() {

  const navigate = useNavigate();

  const handleSignOut = () => {
      auth.signOut().then(() => {
          // Sign-out successful.
          navigate('/'); // Redirect to the login page after sign-out
      }).catch((error) => {
          // An error happened.
          console.error(error);
      });
  };




  return (
    <div>
   
    <Grid container spacing={1}>
    <Grid item xs={2} className="yellow">
    <h1>xs=4</h1>
    </Grid>
    <Grid item xs={4} className="green">

      <h1>xs=4</h1>
    </Grid>
    <Grid item xs={6} className="red">

    <h2>Dashboard</h2>
            <button onClick={handleSignOut}>Sign Out</button>
            {/* Add other dashboard content here */}

    </Grid>

  </Grid>
  </div>

  )
}
