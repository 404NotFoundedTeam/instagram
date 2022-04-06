import { Grid, Input, TextareaAutosize, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";

const styles = {
  con: {
    width: "100%",
    display: "flex",
    alignItems: "start",
    py: 1,
    flexWrapper: "wrap",
  },
  left: {
    px: 2,
    width: { sm: "40%", md: "30%" },
    display: "flex",
    fontWeight: "bold",
    justifyContent: { xs: "left", sm: "right" },
  },
  right: {
    px: 2,
    width: { sm: "60%", md: "70%" },
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  input: {
    mb: 1,
    padding: "5px 10px",
    maxWidth: "400px",
    width: "100%",
    background: "#fafafa",
    borderRadius: "5px",
    border: (theme) => theme.customBorders.input,
  },
};

const Settings = () => {
  const userData = useSelector((state) => state.users.user);
  return (
    <Box sx={{ width: "100%", maxWidth: "991px", py: 5, mx: "auto" }}>
      <Card>
        <Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Name</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.fullName || ""}
              />
              <Typography sx={{ color: "#8E8E92", fontSize: "12px" }}>
                Help people discover your account by using the name you're known
                by: either your full name, nickname, or business name. You can
                only change your name twice within 14 days.
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Username</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.username || ""}
              />
              <Typography sx={{ color: "#8E8E92", fontSize: "12px" }}>
                In most cases, you'll be able to change your username back to
                aliwerdev for another 14 days. Learn More
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Website</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.website || ""}
              />
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Bio</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Your Bio"
                style={{ width: 200 }}
                sx={styles.input}
              />
              <Typography sx={{ py: 1, color: "#636e72", fontSize: "14px" }}>
                Personal Information
              </Typography>
              <Typography sx={{ color: "#8E8E92", fontSize: "12px" }}>
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won't be a part of
                your public profile.
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Email</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.email || ""}
              />
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Phone number</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.phone || ""}
              />
            </Box>
          </Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <Typography fontWeight={"bold"}>Website</Typography>
            </Box>
            <Box sx={{ ...styles.right }}>
              <Input
                disableUnderline
                sx={styles.input}
                value={userData?.website || ""}
              />
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Settings;
