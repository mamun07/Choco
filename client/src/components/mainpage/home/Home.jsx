import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import HomeProductSlider from '../utils/home_product_slider/HomeProductSlider';

const Home = () => {
  return (
    <Box my={5}>
      <Container maxWidth="xl">
        <Box mb={4}>
          <Typography variant="h2">NEW ARRIVALS</Typography>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <HomeProductSlider />
      </Container>
    </Box>
  );
};

export default Home;
