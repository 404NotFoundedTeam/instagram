import { Box, Link, Stack } from "@mui/material";
import Image from "next/image";

import React from "react";

export default function Header() {
  const styles = {
    header: { maxWidth: "1000px", padding: "8px 0", margin: "0 auto" },
  };
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.paper,
        boxShadow: (theme) => theme.customShadows.header,
      }}
    >
      <Stack
        justifyContent="space-between"
        sx={{ ...styles.header }}
        alignItems="center"
      >
        <Link href="/">
          <a>
            <img src="/images/logo.png" alt="logo" />
          </a>
        </Link>
      </Stack>
    </Box>
  );
}
