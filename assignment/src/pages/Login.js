import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username=="Demo" && password) {
      dispatch(login({ username }));
      Cookies.set('session', 'logged_in');
      navigate('/list');
    }else{
      swal("Oops!", "Please use username as Demo", "error");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <h1>Login</h1>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
