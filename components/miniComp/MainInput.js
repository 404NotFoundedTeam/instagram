import { Input } from "@mui/material";
import React from "react";

const MainInput = ({ ...props }) => {
  return <Input sx={{ mb: 2, width: "100%", }} disableUnderline {...props} />;
};

export default MainInput;
