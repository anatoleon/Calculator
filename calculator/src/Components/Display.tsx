import React from "react";
import { Box, Typography } from "@mui/material";

const Display = () => {
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
      <Typography sx={{ color: "white", fontSize: 30 }}>80085</Typography>
    </Box>
  );
};

export default Display;
