import { Paper } from "@mui/material";
import React from "react";

const Card = ({ children, sx, elevation }) => {
  return (
    <Paper
      elevation={elevation || 1}
      sx={{
        width: "100%",
        padding: { md: 3, sm: 2, xs: 0 },
        bgcolor: { sm: "white", xs: "transparent" },
        boxShadow: { sm: (theme) => theme.customShadows.card, xs: "none" },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default Card;
