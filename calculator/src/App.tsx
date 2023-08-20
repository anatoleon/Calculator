import React, { ReactElement } from "react";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import Calculator from "./Components/Calculator";

const App = (): ReactElement => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: 40 }}>Calculator</Typography>
      </Grid>
      <Grid item xs={12} sm={8} m={6} lg={4} sx={{ justifyContent: "center" }}>
        <Calculator />
      </Grid>
    </Grid>
  );
};

export default App;
