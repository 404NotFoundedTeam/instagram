import React from "react";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import MyModal from "../../components/modal";

const PostOne = () => {
  const posts = useSelector((state) => state.explore.posts);
  const postId = useRouter().query.postid;

  const [openPost, setOpenPost] = React.useState(true);

  const post = posts.find((post) => post.id == postId);

  return (
    <Box sx={{ width: "100%", maxWidth: "991px", mx: "auto", pt: 3 }}>
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
            flex: 1,
            bgcolor: "red",
            border: "1px solid black",
            height: "85vh",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PostOne;
