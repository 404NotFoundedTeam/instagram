import { Paper } from "@mui/material";
import React from "react";

const Card = ({ children, sx }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "100%",
        padding: 3,
        boxShadow: (theme) => theme.customShadows.card,
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
