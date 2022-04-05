import {
  Box,
  Button,
  IconButton,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsEmojiSmile, BsArrowLeft } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiImage } from "react-icons/fi";
import Link from "next/link";

const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [openChat, setOpenChat] = React.useState(false);
  const [user, setUser] = React.useState({});
  const users = useSelector((state) => state.users.followers);

  return (
    <Box sx={{ width: "100%", height: "100%", padding: { xs: 0, md: 3 } }}>
      <Paper
        sx={{
          borderRadius: { xs: 0, md: 1 },
          boxShadow: (theme) => theme.customShadows.card,
          overflow: "hidden",
          width: "100%",
          maxWidth: "991px",
          display: "flex",
          mx: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "500px",
            width: { xs: "100%", sm: "300px" },
            position: { xs: "absolute", sm: "relative" },
            top: { xs: 0, sm: "auto" },
            left: { xs: 0, sm: "auto" },
            transform: {
              xs: openChat ? "translateX(-100%)" : "translateX(0)",
              sm: "translateX(0)",
            },
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            zIndex: 3,
            borderRight: (theme) => theme.customBorders.input,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70px",
              alignItems: "center",
              borderBottom: (theme) => theme.customBorders.input,
              display: "flex",
              padding: "10px",
              justifyContent: "center",
            }}
          >
            Aliwerdev
          </Box>
          <Box sx={{ width: "100%", overflow: "auto", flex: 1 }}>
            {users.map((user) => (
              <Box
                key={user.id}
                onClick={() => {
                  setUser(user);
                  setOpenChat(true);
                }}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                  display: "flex",
                  padding: "10px",
                  alignItems: "center",
                  gap: "5px",
                  width: "100%",
                }}
              >
                <img
                  src={user.profile_pic || ""}
                  alt={user.firstname}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Typography>{user.firstname}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {user.id ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              height: "500px",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                borderBottom: (theme) => theme.customBorders.input,
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <IconButton onClick={() => setOpenChat(false)}>
                  <BsArrowLeft />
                </IconButton>
                <img
                  src={user.profile_pic || ""}
                  alt={"fsadfasd"}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
                <Typography>{user.firstname + " " + user.lastname}</Typography>
              </Box>
              <IconButton>
                <RiErrorWarningLine />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "100%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  overflow: "auto",
                }}
              ></Box>
              <Box
                sx={{ width: "100%", padding: { xs: "10px 20px", md: "20px" } }}
              >
                <Box
                  sx={{
                    width: "100%",
                    border: (theme) => theme.customBorders.input,
                    borderRadius: "20px",
                    padding: "6px 15px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    "& svg": {
                      fontSize: "24px",
                      cursor: "pointer",
                    },
                  }}
                >
                  <BsEmojiSmile />
                  <Input
                    placeholder="Message..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    sx={{ flex: 1 }}
                    disableUnderline
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {(!message.length && (
                      <>
                        <FiImage />
                        <AiOutlineHeart />
                      </>
                    )) || (
                      <Button
                        disableRipple
                        sx={{
                          padding: "0",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                      >
                        Send
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              flex: 1,
              height: "500px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              style={{ width: "100px", height: "100px", marginBottom: "20px" }}
              src="http://cdn.onlinewebfonts.com/svg/img_550762.png"
            />
            <Typography sx={{ fontSize: "32px", fontWeight: "300" }}>
              Your Messages
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "300" }}>
              Send private photos and messages to a friend or group.
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Chat;
