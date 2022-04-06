import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";

const PostActions = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: "11px 10px",
          fontSize: "24px",
          "& svg": { cursor: "pointer", "&:hover": { color: "#909090" } },
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
          joshua_l The game in Japan was amazing and I want to share some photos
        </Typography>
      </Box>
    </Box>
  );
};

export default PostActions;
