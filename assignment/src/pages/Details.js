import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Details = () => {
  const itemId = sessionStorage.getItem('item_id');
  const item = useSelector((state) =>
    state.data.items.find((item) => item.id === parseInt(itemId))
  );

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4">Details</Typography>
        {item ? (
          <Box mt={3}>
            <Typography variant="h6">Name: {item.name}</Typography>
            <Typography variant="body1">Details: {item.details}</Typography>
          </Box>
        ) : (
          <Typography variant="body1">Item not found</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Details;
