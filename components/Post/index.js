import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <Box sx={{ width: "100%", maxWidth: "991px", mx: "auto" }}>
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
          <Box sx={{ width: "100%", flex: 1 }}> </Box>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "11px 10px",
                fontSize: "24px",
              }}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <BiHeart />
                <BiMessageRounded />
                <FiSend />
              </Stack>
              <FaRegBookmark />
            </Stack>

            <Box
              sx={{
                padding: "11px 10px",
              }}
            >
              <Stack
                sx={{ marginBottom: "10px" }}
                direction="row"
                alignItems="center"
                gap={1}
              >
                <img src="/images/oval.png" alt="" />
                Liked by craig_love and 44,686 others
              </Stack>
              <Typography>
                joshua_l The game in Japan was amazing and I want to share some
                photos
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
