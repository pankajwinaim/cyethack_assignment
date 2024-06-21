import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} py={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 My App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
