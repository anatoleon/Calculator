import React from "react";
import { ButtonBase, Typography } from "@mui/material";

interface ButtonProps {
  symbol: string;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonBase
      sx={{
        backgroundColor: "purple",
        borderRadius: 40,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color={"white"} fontSize={30}>
        {props.symbol}
      </Typography>
    </ButtonBase>
  );
};

export default Button;
