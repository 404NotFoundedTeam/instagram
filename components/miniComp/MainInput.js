import { Input } from "@mui/material";
import React from "react";

const MainInput = ({ ...props }) => {
  return (
    <Input
      sx={{
        mb: 1,
        padding: "6px 12px",
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
