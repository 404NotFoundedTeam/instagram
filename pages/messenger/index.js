import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";

const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [user, setUser] = React.useState("");
  const users = useSelector((state) => state.users.followers);

  return (
      <Box sx={{ width: "100%", padding: { xs: 0, md: 3 } }}>
        <Paper
          sx={{
            borderRadius: { xs: 0, md: 1 },
            boxShadow: (theme) => ({ md: theme.customShadows.card, xs: 0 }),
            haight: "100%",
            width: "100%",
            maxWidth: "991px",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              height: "500px",
              width: "300px",
              display: 'flex',
              flexDirection: 'column',

              borderRight: (theme) => theme.customBorders.input,
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderBottom: (theme) => theme.customBorders.input,
                display: "flex",
                padding: "10px",
                justifyContent: "center",
              }}
            >
              Aliwerdev
            </Box>
            <Box sx={{ width: "100%", overflow: "auto", flex: 1, p: 1 }}>
              {users.map((user) => (
                <Box
                  key={user.id}
                  sx={{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <img
                    src={user.profile_pic || ""}
                    alt=""
                    style={{
                      width: "50px",
                      height: "5cd0px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography>{user.firstname}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
  );
};

export default Chat;
