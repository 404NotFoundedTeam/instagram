import { Button } from "@mui/material";
import React from "react";

const ButtonPrimary = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonPrimary;
