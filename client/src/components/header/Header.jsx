import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, TextField, Grid } from '@mui/material';
import HeaderLeft from '../HeaderLeft';

const Header = () => {
  return (
    <Box sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            item
            xl={3}
            xs={3}
          >
            <Link to="/">
              <img src="/logo.svg" alt="logo noto" width="140px" />
            </Link>
          </Grid>
          <Grid item xl={6} xs={6}>
            <Box className="header-main_center">
              <TextField fullWidth id="fullWidth" />
            </Box>
          </Grid>
          <Grid className="header-main_right" item xl={3} xs={3}>
            <HeaderLeft />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
