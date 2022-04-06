import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PostActions from "./PostActions";

const Post = ({ post }) => {
  return (
    <Box
      sx={{ width: "100%", background: "#fff", maxWidth: "991px", mx: "auto" }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ height: "85vh" }}>
          <video
            controls={true}
            autoPlay={true}
            src={post.video_url}
            style={{ height: "100%", objectFit: "cover", maxWidth: "550px" }}
          ></video>
        </Box>
        <Box
          sx={{
            width: "600px !important",
            heigth: "85vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", flex: 1 }}>
            <PostActions />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
