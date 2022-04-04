import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <Button sx={{ width: "100%", my: 2 }} variant={'contained'} {...props}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
