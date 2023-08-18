import React from "react";
import { Box } from "@mui/material";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "black" }}>
      <Display />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[...Array(10).keys()].map((key) => (
          <Button symbol={String(key)} />
        ))}
      </Box>
      {["+", "-", "*", "/", "="].map((key) => (
        <Button symbol={String(key)} />
      ))}
    </Box>
  );
};

export default Calculator;
