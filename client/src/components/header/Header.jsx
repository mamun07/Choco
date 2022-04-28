import React, { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Grid, Box, Avatar } from "@mui/material";
import "./header.css";

const Header = () => {
  const value = useContext(GlobalState);
  return (
    <Box sx={{ py: 2, borderBottom: "1px solid #f0f0f0" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={2}>
            <a href="/">
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="/logo.png"
                sx={{ width: 200, height: 60 }}
              />
            </a>
          </Grid>
          <Grid item xl={8}>
            <p>Search</p>
          </Grid>
          <Grid item xl={2}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ul className="header_right">
                <li>
                  <i class="las la-bars"></i>
                </li>
                <li>
                  <i class="las la-shopping-bag"></i>
                </li>
                <li>
                  <i class="las la-user"></i>
                </li>
                <li>
                  <i class="lar la-heart"></i>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
