import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import SearchIcon from '@mui/icons-material/Search';
import eazImage from '../Asset/eaz.png';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import '../App.css';
import LanguageIcon from '@mui/icons-material/Language';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const handleChangeLanguage = () => {
  // Your code to change the language goes here
  console.log('Language changed');
};

export default function Navbar() {
  return (


 

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar className="Toolbar"> 
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <img src={eazImage} alt="Description of the image" />

      </Grid>
      <Grid className="name-grid" item xs={4}>

      <MenuItem className="menu-link" component={Link} to="/Home">Home</MenuItem>
       <MenuItem className="menu-link" component={Link} to="/Careers">Careers</MenuItem>
      <MenuItem className="menu-link" component={Link} to="/Pricing">Pricing</MenuItem>
      <MenuItem className="menu-link" component={Link} to="/Features">Features</MenuItem>

      </Grid>
      <Grid item xs={4}>
      
      <IconButton
      color="inherit"
      aria-label="change language"
      className="but-link"
      onClick={handleChangeLanguage}
    >
      <LanguageIcon /> Engilsh 
    </IconButton>
    |
      <Button  className="button-link" variant="outlined" component={Link} to="/">Log In</Button>
      <Button   className="button-link-1" >Get Demo</Button>

      </Grid>

    </Grid>
    </Toolbar>
      </AppBar>
  </Box>
  );
}