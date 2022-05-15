import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box py={5} bgcolor={'#ddd'}>
      <Container maxWidth="xl">
        <Typography variant="p">
          &copy; 2022 Noto, all rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
