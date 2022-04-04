import { Box, Paper } from "@mui/material";
import React from "react";
import Header from "../../components/header";

const Chat = () => {
  return (
    <>
      <Header />
      <Box sx={{ width: "100%", height: "100vh", padding: { xs: 0, md: 3 } }}>
        <Paper
          sx={{
            borderRadius: { xs: 0, md: 1 },
            boxShadow: (theme) => ({ md: theme.customShadows.card, xs: 0 }),
            haight: "100%",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          <Box sx={{height: '200px'}}></Box>
          <Box></Box>
        </Paper>
      </Box>
    </>
  );
};

export default Chat;
