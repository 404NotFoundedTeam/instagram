import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PlayerMini from "../../components/player/PlayerMini";

const Explore = () => {
  var _ = require("lodash");

  const posts = useSelector((state) => state.explore.posts);
  const postsArr = _.chunk(posts, 6);
  console.log(posts);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", maxWidth: "991px", mx: "auto" }}>
        <ImageList sx={{ width: "100%" }} variant="quilted" cols={3}>
          {postsArr.map((posts, index1) => {
            return posts.map((post, index2) => {
              const isBig =
                (index1 % 2 === 0 && index2 == 1) ||
                (index1 % 2 !== 0 && index2 == 3);
              return (
                <ImageListItem
                  key={post.img}
                  sx={{ height: "100%", padding: { xs: "5px", md: "10px" } }}
                  cols={isBig ? 2 : 1}
                  rows={isBig ? 2 : 1}
                >
                  <PlayerMini link={post.video_url} data={post} isBig={isBig} />
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
