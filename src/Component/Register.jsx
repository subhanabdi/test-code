import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar"
import { signUpWithEmailAndPassword, signInWithGoogle, signInWithGitHub } from '../firebase';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignUp = () => {
      signUpWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleGoogleSignUp = () => {
      signInWithGoogle()
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleGitHubSignUp = () => {
      signInWithGitHub()
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
 
<React.Fragment>
<Navbar />
<Container fixed>
  <Grid container spacing={2}>
    <Grid item xs={8}>
      <div className="login-content">
        <h2>Sign in to</h2>
        <h3>Lorem Ipsum is simply</h3>
        <p>If you don’t have an account register</p>
        <p>
          You can <Link to="/">Login in!</Link>
        </p>
        <div></div>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className="login-name">
        <div className="login-in">
          <h2>Sign in</h2>
        </div>



        <form onSubmit={(e) => e.preventDefault()}>
        

          <TextField
            fullWidth
            label="Username"
            id="fullWidth"
            className="email"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

<TextField
            fullWidth
            label="Email"
            id="fullWidth"
            className="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

<TextField
            fullWidth
            label="Password"
            id="fullWidth"
            type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
         
         <Button
            size="medium"
            onClick={handleSignUp}
            className="login-but"
          >
            Register
          </Button>
        



          <div className="Auth-Oauth">
        <Link to="/">Already have an account? Login</Link>
            <IconButton
              color="inherit"
              className="but-google"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle />
            </IconButton>
            <IconButton
              color="inherit"
              className="but-github"
              onClick={handleGitHubSignUp}
            >
              <FaGithub />
            </IconButton>
          </div>
        </form>
      </div>



















    </Grid>
  </Grid>
</Container>
</React.Fragment>

    );
  }
  
  export default Register;