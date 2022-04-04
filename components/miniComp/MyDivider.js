import { Box, Divider, Drawer } from "@mui/material";
import React from "react";

const MyDivider = ({ title }) => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {title ? (
        <>
          <Divider sx={{ flex: 1 }} />
          <Box sx={{ px: 2 }}>{title}</Box>
          <Divider sx={{ flex: 1 }} />
        </>
      ) : (
        <Divider sx={{ width: "100%" }} />
      )}
    </Box>
  );
};

export default MyDivider;
