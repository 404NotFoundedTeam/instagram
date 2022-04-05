import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

const PlayerMini = ({ link, isBig, data }) => {
  const router = useRouter();
  console.log(router);
  const video = useRef(null);
  const [videoWidth, setVideoWidth] = React.useState(0);

  useEffect(() => {
    setVideoWidth(video.current.clientWidth);
  }, [video.current?.clientWidth]);

  const play = () => {
    video.current?.play();
  };
  const pause = () => {
    video.current?.pause();
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <video
        ref={video}
        style={{
          width: "100%",
          objectFit: "cover",
          height: videoWidth,
        }}
        src={link}
        controls={false}
        muted={true}
        loop={true}
      ></video>
      <Box
        onMouseEnter={(isBig && play) || null}
        onMouseLeave={(isBig && pause) || null}
        onClick={() => router.push("/explore/" + data.id)}
        sx={{
          "div:hover > &": {
            opacity: 1,
          },
          opacity: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          bgcolor: "rgba(0,0,0,0.2)",
          zIndex: 4,
        }}
      >
        <Box></Box>
      </Box>
    </Box>
  );
};

export default PlayerMini;
