import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/login', { ...user });

      localStorage.setItem('firstLogin', true);

      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <Box>
      <form onSubmit={loginSubmit}>
        <TextField
          label="Email"
          name="email"
          variant="standard"
          type="email"
          required
          value={user.email}
          onChange={onChangeInput}
          sx={{ mb: 3, width: '100%' }}
        />
        <TextField
          label="Password"
          name="password"
          variant="standard"
          type="password"
          required
          value={user.password}
          onChange={onChangeInput}
          sx={{ mb: 5, width: '100%' }}
        />
        <Button type="submit" variant="contained" sx={{ p: '10px 30px' }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
