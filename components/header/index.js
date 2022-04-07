import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiMessengerFill, RiMessengerLine } from "react-icons/ri";
import { HiPlusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();

  let icons = [
    [<AiOutlineHome />, "Home", "/"],
    [<RiMessengerLine />, "Messenger", "/messenger"],
    [<HiOutlinePlusCircle />, "Create Post", "/create-post"],
    [<AiOutlineCompass />, "Explore", "/explore"],
    [<AiOutlineHeart />, "Likes", "/likes"],
  ];
  icons.forEach(([icon, text, path], i, arr) => {
    if (router.pathname.startsWith(path) && router.pathname === "/") {
      arr[i][0] = <AiFillHome />;
    }
    if (router.pathname.startsWith(path) && text === "Create Post") {
      arr[i][0] = <HiPlusCircle />;
    }
    if (router.pathname.startsWith(path) && text === "Messenger") {
      arr[i][0] = <RiMessengerFill />;
    }
    if (router.pathname.startsWith(path) && text === "Explore") {
      arr[i][0] = <AiFillCompass />;
    }
    if (router.pathname.startsWith(path) && text === "Likes") {
      arr[i][0] = <AiFillHeart />;
    }
  });
  const mode = useSelector((state) => state.main.mode);
  const styles = {
    header: {
      maxWidth: "991px",
      padding: "12px",
      margin: "0 auto",
    },
    menulist: {
      pr: "30px",
      fontSize: "14px",
      "& svg": { fontSize: "14px" },
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },
    searchBox: {
      padding: "0 2px",
      width: "220px",
      borderRadius: "5px",
      border: (theme) => theme.customBorders.input,
      outline: "none",
      backgroundColor: "background.default",
      margin: "0 auto",
    },
    logoCover: { "& a": { display: "flex", alignItems: "center" } },
    searchInput: {
      background: "transparent",
      border: "none",
      width: "100%",
      color: mode == "dark" ? "#fff" : "rgba(18, 18, 18, 1)",
      outline: "none",
      padding: "8px 8px",
    },
    searchIcon: {
      color: "gray",
      width: "20px",
    },
    iconStack: {
      fontSize: { xs: "22px", sm: "26px" },
      "& a": { display: "flex", alignItems: "center" },
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <Link href="/">
            <a>
              <img
                style={{ width: "150px", minWidth: "100px" }}
                src={
                  mode == "dark" ? "/images/logo_grad.png" : "/images/logo.png"
                }
                alt="logo"
              />
            </a>
          </Link>
        </Grid>
        <Grid item xs={4} sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ ...styles.searchBox }}
            gap={1}
          >
            <label htmlFor="search-input"></label>
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
                  <a>
                    <IconButton
                      disableRipple
                      size={"large"}
                      sx={{ padding: "4px" }}
                    >
                      {icon}
                    </IconButton>
                  </a>
                </Link>
              </Box>
            ))}
            <Box
              sx={{
                cursor: "pointer",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Box
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar
                  sx={{ width: "26px", height: "26px" }}
                  src={"/images/oval.png"}
                  alt={"User Profile"}
                />
              </Box>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  sx={styles?.menulist}
                  onClick={() => {
                    router.push("/profile");
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  sx={styles?.menulist}
                  onClick={() => {
                    router.push("/profile/settings");
                    handleClose();
                  }}
                >
                  Setting
                </MenuItem>
                <Divider />
                <MenuItem
                  sx={styles?.menulist}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
