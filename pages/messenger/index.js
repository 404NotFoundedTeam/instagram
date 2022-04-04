import { Box, Paper } from "@mui/material";
import React from "react";
import Header from "../../components/header";

const Chat = () => {
  return (
    <>
      <Header />
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
              borderRight: (theme) => theme.customBorders.input,
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderBottom: (theme) => theme.customBorders.input,
              }}
            ></Box>
          </Box>
          <Box></Box>
        </Paper>
      </Box>
    </>
  );
};

export default Chat;
