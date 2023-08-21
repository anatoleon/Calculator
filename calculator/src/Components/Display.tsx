import React, { ReactElement, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { evaluate, max } from "mathjs";
import { errorString } from "../helpers/helpers";

interface DisplayProps {
  total: string;
}

const calculateDisplay = (total: string): string | null => {
  if (total === errorString) {
    return total;
  }
  if (isNaN(Number(total.charAt(total.length - 1)))) {
    const slice: string = total.slice(0, total.length - 1);
    const secondTolastSymbolIndex: number = max(
      slice.lastIndexOf("+"),
      slice.lastIndexOf("-"),
      slice.lastIndexOf("*"),
      slice.lastIndexOf("/")
    );
    if (
      total.charAt(secondTolastSymbolIndex) === "*" ||
      total.charAt(secondTolastSymbolIndex) === "/"
    ) {
      try {
        return evaluate(total.substring(0, total.length - 1));
      } catch {
        return errorString;
      }
    }
  } else {
    const lastSymbolIndex: number = max(
      total.lastIndexOf("+"),
      total.lastIndexOf("-"),
      total.lastIndexOf("*"),
      total.lastIndexOf("/")
    );
    return total.substring(lastSymbolIndex + 1);
  }
  return null;
};

const Display: React.FC<DisplayProps> = ({ total }): ReactElement => {
  const [displayNumber, setDisplayNumber] = useState("0");

  useEffect(() => {
    const newDisplay = calculateDisplay(total);
    if (newDisplay) {
      setDisplayNumber(newDisplay);
    }
  }, [total]);
  return (
    <Box
      sx={{
        backgroundColor: "gray",
        textAlign: "right",
        borderRadius: 2,
        paddingX: 2,
        marginBottom: 2,
      }}
    >
      <Typography sx={{ color: "white", fontSize: 30 }}>
        {displayNumber}
      </Typography>
    </Box>
  );
};

export default Display;
