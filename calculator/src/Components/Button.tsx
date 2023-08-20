import React, { ReactElement } from "react";
import { ButtonBase, Typography } from "@mui/material";

interface ButtonProps {
  symbol: string;
  onClick: () => void;
  selected?: boolean;
}

const getBackgroundColor = (
  symbol: string,
  selected: boolean | undefined
): string => {
  if (isNaN(Number(symbol))) {
    return selected ? "lightBlue" : "blue";
  }
  return "purple";
};

const Button = (props: ButtonProps): ReactElement => {
  return (
    <ButtonBase
      sx={{
        backgroundColor: getBackgroundColor(props.symbol, props.selected),
        borderRadius: 2,
        width: "100%",
        height: 80,
      }}
      onClick={props.onClick}
    >
      <Typography color={"white"} fontSize={30}>
        {props.symbol}
      </Typography>
    </ButtonBase>
  );
};

export default Button;
