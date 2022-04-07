import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import RoundImg from "../RoundImg";
import PostActions from "./PostActions";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { AiFillHeart } from "react-icons/ai";

const MainPost = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const liked = () => {
    setLike(true);
    setTimeout(() => {
      setLike(false);
    }, 1000);
    setIsLiked(true);
  };

  return (
    <Card
      sx={{
        marginTop: { xs: 0, md: "20px" },
        boxShadow: "0px 0px 0 1px rgba(17, 17, 26, 0.1)",
        borderRadius: { xs: 0, md: "5px" },
      }}
      elevation={0}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "11px 10px" }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <RoundImg size={40} isBorder={false} />
          <Box>
            <Typography fontSize={13} fontWeight="bold">
              Jon
            </Typography>
            <Typography fontSize={11}>Tokyo, Japan</Typography>
          </Box>
        </Stack>
        <MoreHorizIcon />
      </Stack>
      <Box
        onDoubleClick={liked}
        sx={{
          width: "100%",
          cursor: "pointer",
          height: "375px",
          position: "relative",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "& svg": {
              fontSize: "60px",
              color: "#fff !important",
              animation: "2s like-heart-animation ease-in-out forwards",
            },
          }}
        >
          {like && <AiFillHeart />}
        </Box>
      </Box>
      <PostActions isLiked={isLiked} />
    </Card>
  );
};

export default MainPost;
