// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, signInWithGitHub } from "../firebase";
import Navbar from "./Navbar";
import ResetPassword from "./ResetPassword";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitHubLogin = () => {
    signInWithGitHub()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
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
                You can <Link to="/register">Register it!</Link>
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
                <div className="login-forget">
                  <Link to="#" onClick={() => setShowResetPassword(true)}>Forgot Password?</Link>
                  {showResetPassword && <ResetPassword onClose={() => setShowResetPassword(false)} />}
                </div>
                <Button
                  size="medium"
                  onClick={handleEmailLogin}
                  className="login-but"
                >
                  Login
                </Button>
                <div className="Auth-Oauth">
                  <p>or continue with</p>
                  <IconButton
                    color="inherit"
                    className="but-google"
                    onClick={handleGoogleLogin}
                  >
                    <FcGoogle />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    className="but-github"
                    onClick={handleGitHubLogin}
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

export default Login;
