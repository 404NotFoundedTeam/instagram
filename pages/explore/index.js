import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PlayerMini from "../../components/player/PlayerMini";
import Post from "../../components/Post";
import MyModal from "../../components/modal";

const Explore = () => {
  var _ = require("lodash");
  const [post, setPost] = React.useState(null);
  const [openPost, setOpenPost] = React.useState(false);

  const posts = useSelector((state) => state.explore.posts);
  const postsArr = _.chunk(posts, 9);

  return (
    <Box sx={{ width: "100%" }}>
      <MyModal open={openPost} setOpen={setOpenPost}>
        <Post post={post} />
      </MyModal>
      <Box sx={{ width: "100%", maxWidth: "991px", mx: "auto" }}>
        <ImageList
          sx={{ width: "100%", gap: "2px !important" }}
          variant="quilted"
          cols={3}
        >
          {postsArr.map((posts, index1) => {
            return posts.map((post, index2) => {
              const isBig =
                (index1 % 2 === 0 && index2 == 1) ||
                (index1 % 2 !== 0 && index2 == 0);
              return (
                <ImageListItem
                  key={post.img}
                  sx={{ height: "100%", padding: { xs: "0", md: "10px" } }}
                  cols={isBig ? 2 : 1}
                  rows={isBig ? 2 : 1}
                  onClick={() => {
                    setPost(post);
                    setOpenPost(true);
                  }}
                >
                  <PlayerMini link={post.video_url} isBig={isBig} />
                </ImageListItem>
              );
            });
          })}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Explore;
