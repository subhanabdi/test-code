// ResetPassword.js
import React, { useState } from "react";
import { auth } from "../firebase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ResetPassword({ onClose }) {
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleResetPassword = () => {
    if (!resetEmail) {
      setResetMessage("Please enter your email address.");
      return;
    }

    auth
      .sendPasswordResetEmail(resetEmail)
      .then(() => {
        setResetMessage("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        setResetMessage("Error sending password reset email.");
      });
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <TextField
            fullWidth
            label="Email"
            id="fullWidth"
            className="email"
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />
          <Button
            size="medium"
            onClick={handleResetPassword}
            className="login-but"
          >
            Reset Password
          </Button>
          {resetMessage && <p>{resetMessage}</p>}
          <Button className="button-link-1" onClick={onClose}>Close</Button>
        </div>
      </Box>
    </Modal>
  );
}

export default ResetPassword;
