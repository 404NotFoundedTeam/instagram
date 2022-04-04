import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = ({ children, type, ...props }) => {
  return (
    <Button
      sx={{ width: "100%", my: 2 }}
      type={type || "button"}
      variant={"contained"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
