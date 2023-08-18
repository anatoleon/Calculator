import React from "react";
import { ButtonBase, Typography, Grid } from "@mui/material";

interface ButtonProps {
  symbol: string;
}

const Button = (props: ButtonProps) => {
  return (
    <Grid item xs={3} sx={{ textAlign: "center" }}>
      <ButtonBase
        sx={{
          backgroundColor: !isNaN(Number(props.symbol)) ? "purple" : "blue",
          borderRadius: 2,
          width: "100%",
          height: 80,
        }}
      >
        <Typography color={"white"} fontSize={30}>
          {props.symbol}
        </Typography>
      </ButtonBase>
    </Grid>
  );
};

export default Button;
