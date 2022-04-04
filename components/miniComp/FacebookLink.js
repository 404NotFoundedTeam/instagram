import { Box } from "@mui/material";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";

const FacebookLink = ({ contained }) => {
  return (
    <a href="https://facebook.com" target={"_blank"}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: contained ? "#fff" : "#0779E9",
          padding: '0.5rem',
          borderRadius: "5px",
          mb: 2,
          bgcolor: contained ? "#0779E9" : "transparent",
        }}
      >
        <AiFillFacebook style={{ marginRight: "5px" }} />
        Log in with Facebook
      </Box>
    </a>
  );
};

export default FacebookLink;
