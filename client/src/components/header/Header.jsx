import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, TextField, Grid, Slide, Dialog } from '@mui/material';
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
