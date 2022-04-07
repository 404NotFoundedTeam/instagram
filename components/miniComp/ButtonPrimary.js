import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = ({ children, type, sx, ...props }) => {
  return (
    <Button
      sx={{ boxShadow: "none", my: 2, ...sx }}
      type={type || "button"}
      variant={"contained"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
