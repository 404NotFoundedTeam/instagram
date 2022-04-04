import { Box, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { HiPlusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React from "react";
import Link from "next/link";

export let icons = [
  [<AiOutlineHome />, "Home", "/"],
  [<RiMessengerLine />, "Messenger", "/messenger"],
  [<HiOutlinePlusCircle />, "Create Post", "/create-post"],
  [<AiOutlineCompass />, "Explore", "/explore"],
  [<AiOutlineHeart />, "Likes", "/likes"],
];

export default function Header() {
  const styles = {
    header: {
      maxWidth: "991px",
      padding: "8px 10px",
      margin: "0 auto",
    },
    searchBox: {
      padding: "0 2px",
      width: "180px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      backgroundColor: "#efefef",
      margin: "0 auto",
    },
    logoCover: { display: "flex", alignItems: "center" },
    searchInput: {
      background: "transparent",
      border: "none",
      width: "100%",
      outline: "none",
      padding: "6px 8px",
    },
    searchIcon: {
      color: "gray",
      width: "20px",
    },
    iconStack: {
      fontSize: { xs: "22px", sm: "24px" },
      "& a": { display: "flex", alignItems: "center" },
    },
  };

  return (
    <Box
      container
      sx={{
        background: (theme) => theme.palette.background.paper,
        boxShadow: (theme) => theme.customShadows.header,
      }}
    >
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        sx={{ ...styles.header }}
        gap={1}
      >
        <Grid item xs={4} sm={3} sx={{ ...styles.logoCover }}>
          <img
            style={{ maxWidth: "100%", minWidth: "100px" }}
            src="/images/logo.png"
            alt="logo"
          />
        </Grid>
        <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ ...styles.searchBox }}
            gap={1}
          >
            <label for="search-input"></label>
            <SearchIcon sx={{ ...styles.searchIcon }} />

            <input
              style={{ ...styles.searchInput }}
              type="text"
              placeholder="Search"
              id="search-input"
            />
          </Stack>
        </Grid>
        <Grid item xs={7} sm={4}>
          <Stack
            sx={{ ...styles.iconStack }}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            gap={2}
          >
            {icons.map(([icon, text, href]) => (
              <Box
                key={text}
                sx={{
                  display: {
                    xs: text == "Messenger" ? "block" : "none",
                    sm: "block",
                  },
                }}
              >
                <Link href={href}>
                  <a>{icon}</a>
                </Link>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
