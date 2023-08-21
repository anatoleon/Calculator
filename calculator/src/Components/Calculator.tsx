import React, { ReactElement, useState } from "react";
import { Box, Grid } from "@mui/material";
import Display from "./Display";
import Button from "./Button";
import { buttonOrder, errorString } from "../helpers/helpers";
import { evaluate } from "mathjs";

const Calculator: React.FC = (): ReactElement => {
  const [total, setTotal] = useState<string>("0");

  const onAddSymbol = (symbol: string) => {
    if ((total === "0" && !isNaN(Number(symbol))) || total === errorString) {
      setTotal(symbol);
      return;
    }
    var runningTotal: string = total;
    if (isNaN(Number(symbol))) {
      if (isNaN(Number(total.charAt(total.length - 1)))) {
        runningTotal = runningTotal.slice(0, runningTotal.length - 1);
      }
    }
    if (symbol === "=") {
      try {
        setTotal(String(evaluate(runningTotal)));
      } catch {
        setTotal(errorString);
      }
      return;
    }
    setTotal(runningTotal + symbol);
  };

  const onClear = () => {
    setTotal("0");
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Display total={total} />
      <Grid container spacing={1}>
        {buttonOrder.map((row) =>
          row.map((key) => (
            <Grid item xs={3} sx={{ textAlign: "center" }} key={key}>
              <Button
                symbol={key}
                onClick={() => onAddSymbol(key)}
                selected={total.charAt(total.length - 1) === key}
              />
            </Grid>
          ))
        )}
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button symbol={"Clear"} onClick={onClear} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calculator;
