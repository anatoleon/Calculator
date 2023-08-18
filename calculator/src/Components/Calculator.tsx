import React from "react";
import { Box, Grid } from "@mui/material";
import Display from "./Display";
import Button from "./Button";
import { buttonOrder } from "../helpers/helpers";

const Calculator = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Display />
      <Grid container spacing={1}>
        {buttonOrder.map((row) =>
          row.map((key) => <Button symbol={String(key)} />)
        )}
      </Grid>
    </Box>
  );
};

export default Calculator;
