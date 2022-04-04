import { Box } from "@mui/material";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";

const FacebookLink = () => {
  return (
    <a href="https://facebook.com" target={"_blank"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0779E9",
          mb: 2,
        }}
      >
        <AiFillFacebook style={{ marginRight: "5px" }} />
        Log in with Facebook
      </Box>
    </a>
  );
};

export default FacebookLink;
