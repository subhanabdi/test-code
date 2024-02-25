import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <h1>xs=6 md=8</h1>
      </Grid>
      <Grid item xs={6} md={4}>
        <h1>xs=6 md=4</h1>
      </Grid>
      <Grid item xs={6} md={4}>
        <h1>xs=6 md=4</h1>
      </Grid>
      <Grid item xs={6} md={8}>
        <h1>xs=6 md=8</h1>
      </Grid>
    </Grid>
  </Box>
  )
}
