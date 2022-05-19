import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Grid,
  Slide,
  Dialog,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  CardMedia,
} from '@mui/material';
import LoginPopup from '../mainpage/utils/LoginPopup';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ py: 2, borderBottom: '1px solid #f0f0f0' }}>
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sm={2}
            lg={1.5}
            xxl={1}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Link to="/">
              <CardMedia alt="Paella dish" component="img" image="/logo.svg" />
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            sm={6}
            ml={'auto'}
            display={{ sm: 'block', xs: 'none' }}
          >
            <Box className="header-main_center" variant="form" component="form">
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <OutlinedInput
                  sx={{ borderRadius: '50px' }}
                  placeholder="Search here.."
                  id="s"
                  type={'text'}
                  autoComplete="on"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton>
                        <i className="las la-search"></i>
                      </IconButton>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <i className="las la-camera"></i>
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={8} sm={3} md={3} className="header-main_right">
            <ul>
              <li>
                <Link className="cart_icons" to="/cart">
                  <Box>
                    <span>3</span>
                    <i className="las la-shopping-cart"></i>
                  </Box>
                </Link>
              </li>
              <li className="login-popup" onClick={handleClickOpen}>
                <i className="lar la-user"></i>
              </li>
              <li>
                <Link to="/product">
                  <i className="lar la-heart"></i>
                </Link>
              </li>
              <li
                className="search-popup-md"
                onClick={() => alert('Search options working')}
              >
                <i className="las la-search"></i>
              </li>
            </ul>
            <>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
              >
                <LoginPopup />
              </Dialog>
            </>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
