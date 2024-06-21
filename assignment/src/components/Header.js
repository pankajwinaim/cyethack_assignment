import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove('session');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        {isAuthenticated && (
          <Box display="flex" alignItems="center">
            <Typography variant="body1" style={{ marginRight: '1rem' }}>
              Welcome {user?.username}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
