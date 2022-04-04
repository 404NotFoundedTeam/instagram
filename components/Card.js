import { Paper } from "@mui/material";
import React from "react";

const Card = ({ children, sx }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: 3,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
