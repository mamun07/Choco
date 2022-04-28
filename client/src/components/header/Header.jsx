import React, { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Grid, Box, Avatar } from "@mui/material";

const Header = () => {
  const value = useContext(GlobalState);
  return (
    <Box sx={{ py: 2, bgcolor: "#ddd" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={2}>
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src="/logo.png"
              sx={{ width: 200, height: 60 }}
            />
          </Grid>
          <Grid item xl={8}>
            <p>navbar</p>
          </Grid>
          <Grid item xl={2}>
            <p>cart</p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
