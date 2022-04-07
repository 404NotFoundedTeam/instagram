import { IconButton, Input, TextareaAutosize, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { BsMoon, BsSun } from "react-icons/bs";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import ButtonPrimary from "../../components/miniComp/ButtonPrimary";
import RoundImg from "../../components/RoundImg";
import { setMode } from "../../redux/actions/main";

const styles = {
  con: {
    width: "100%",
    display: "flex",
    alignItems: "start",
    py: 1,
    flexWrap: "wrap",
  },
  left: {
    px: 2,
    width: { xs: "100%", sm: "30%", md: "20%" },
    minWidth: "100px",
    display: "flex",
    fontWeight: "bold",
    mb: 1,
    justifyContent: { xs: "left", sm: "right" },
  },
  right: {
    px: 2,
    width: { xs: "100%", sm: "70%", md: "80%" },
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };
  const changeMode = () => {
    console.log("change mode");
    setMode(mode == "dark" ? "light" : "dark");
  };

  const mode = useSelector((state) => state.main.mode);

  return (
    <Box sx={{ width: "100%", maxWidth: "991px", py: 5, mx: "auto" }}>
      <Card>
        <Box>
          <Box sx={styles.con}>
            <Box sx={styles.left}>
              <RoundImg borderColor={"none"} src={userData?.profile_pic} />
            </Box>
            <Box
              sx={{
                width: "100%",
                ...styles.right,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "18px", fontWeight: " bold", mb: 1 }}
                >
                  {userData.username}
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {userData.email}
                </Typography>
              </Box>
              <Box>
                <IconButton onClick={changeMode} sx={{ mr: 2 }}>
                  {mode == "dark" ? <BsSun /> : <BsMoon />}
                </IconButton>
              </Box>
            </Box>
          </Box>
          <form onSubmit={handleSubmit(submit)}>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Name</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <Input
                  {...register("fullName", { required: true })}
                  disableUnderline
                  sx={styles.input}
                  defaultValue={userData?.fullName || ""}
                />
                <Typography sx={{ color: "#8E8E92", fontSize: "12px" }}>
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                  You can only change your name twice within 14 days.
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Username</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <Input
                  {...register("username", { required: true })}
                  disableUnderline
                  sx={styles.input}
                  defaultValue={userData?.username || ""}
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
                  {...register("website", { required: false })}
                  disableUnderline
                  sx={styles.input}
                  defaultValue={userData?.website || ""}
                />
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Bio</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <TextareaAutosize
                  {...register("bio", { required: false })}
                  aria-label="empty textarea"
                  placeholder="Your Bio"
                  style={{
                    ...styles.input,
                    outline: "none",
                    minHeight: "40px",
                  }}
                  defaultValue={userData?.bio || ""}
                  sx={styles.input}
                />
                <Typography sx={{ py: 1, color: "#636e72", fontSize: "14px" }}>
                  Personal Information
                </Typography>
                <Typography sx={{ color: "#8E8E92", fontSize: "12px" }}>
                  Provide your personal information, even if the account is used
                  for a business, a pet or something else. This won't be a part
                  of your public profile.
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Email</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <Input
                  {...register("email", { required: false })}
                  type="email"
                  disableUnderline
                  sx={styles.input}
                  defaultValue={userData?.email || ""}
                />
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Phone number</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <Input
                  {...register("phone", { required: true })}
                  disableUnderline
                  sx={styles.input}
                  type="number"
                  defaultValue={userData?.phone || ""}
                />
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}>
                <Typography fontWeight={"bold"}>Gender</Typography>
              </Box>
              <Box sx={{ ...styles.right }}>
                <select
                  {...register("gender", { required: false })}
                  style={styles.input}
                  defaultValue={userData?.gender || ""}
                >
                  <option value={"Male"}>Male</option>
                  <option value={"Famale"}>Famale</option>
                </select>
              </Box>
            </Box>
            <Box sx={styles.con}>
              <Box sx={styles.left}></Box>
              <Box sx={{ ...styles.right }}>
                <ButtonPrimary type={"submit"}>Save</ButtonPrimary>
              </Box>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default Settings;
