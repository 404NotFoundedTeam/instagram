import React from "react";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PostOne = () => {
  const posts = useSelector((state) => state.explore.posts);
  const postId = useRouter().query.postid;

  const post = posts.find((post) => post.id == postId);

  return <Box>
      {JSON.stringify(post)}
  </Box>;
};

export default PostOne;
