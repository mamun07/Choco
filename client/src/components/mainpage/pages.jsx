import React from "react";
import { Container, Grid } from "@mui/material";

const pages = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xl={12}>
          <p>Main Page Components</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default pages;
