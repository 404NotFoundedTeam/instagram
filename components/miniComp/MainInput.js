import { Input } from "@mui/material";
import React from "react";

const MainInput = ({ ...props }) => {
  return (
    <Input
      sx={{
        mb: 2,
        padding: "10px",
        width: "100%",
        background: "#fafafa",
        borderRadius: "5px",
        border: (theme) => theme.customBorders.input,
      }}
      disableUnderline
      {...props}
    />
  );
};

export default MainInput;
