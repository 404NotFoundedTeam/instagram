import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RiSettings3Line } from "react-icons/ri";

const UserProfile = () => {
  const router = useRouter();
  const users = useSelector((state) => state.users.followers);
  const username = router.query.username;
  const user = useSelector((state) => state.users.user);
  let userData = {};

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (username == user.username) {
    userData = user;
  } else {
    userData = users.find((user) => user.username == username);
  }

  return (
    <Box sx={{ width: "100%", maxWidth: "991px", mx: "auto" }}>
      <Box
        sx={{
          width: "100%",
          py: 5,
          display: "flex",
        }}
      >
        <Box sx={{ width: "180px", height: "180px", mx: 12 }}>
          <img
            src={userData?.profile_pic}
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </Box>
        <Box sx={{}}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography sx={{ fontWeight: 200, fontSize: "32px" }}>
              {userData?.username}
            </Typography>
            <button
              style={{
                padding: "6px 16px",
                borderRadius: "5px",
                border: "1px solid #909090",
                outline: "none",
                background: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Edit profile
            </button>
            <IconButton>
              <RiSettings3Line />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontSize: "16px",
              py: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 200, fontSize: "16px" }}>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                {userData.posts?.length || 0}
              </span>{" "}
              posts
            </Typography>
            <Typography sx={{ fontWeight: 200 }}>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                {userData.followers?.length || 0}
              </span>{" "}
              followers
            </Typography>
            <Typography sx={{ fontWeight: 200 }}>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                {userData.following?.length || 0}
              </span>{" "}
              following
            </Typography>
          </Box>
          <Box sx={{ width: "" }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: "16px", display: "flex" }}
            >
              {userData?.firstname + " " + userData?.lastname}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default UserProfile;
