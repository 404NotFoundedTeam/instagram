import React from "react";
import BottomNav from "../bottomNav";
import Header from "../header";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  const router = useRouter();
  const mode = useSelector((state) => state.main.mode);
  const show =
    router.pathname === "/auth" || router.pathname === "/auth/signUp";

  return (
    <Box
      sx={{
        "& svg, & p": {
          color:
            mode == "dark"
              ? "#fff !important"
              : "rgba(18, 18, 18, 1) !important",
        },
        "& input": {
          color: "rgba(18, 18, 18, 1)",
        },
      }}
    >
      {!show && <Header />}
      {children}
      {!show && <BottomNav sx={{ display: { xs: "flex", sm: "none" } }} />}
    </Box>
  );
}
