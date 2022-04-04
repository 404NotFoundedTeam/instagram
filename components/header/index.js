import { Box, Link, Stack } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Box sx={{ background: "background.paper" }}>
      <Stack sx={{ maxWidth: "1440px", padding: "8px 0" }}>
        <Link href="/">
          <a></a>
        </Link>
      </Stack>
    </Box>
  );
}
