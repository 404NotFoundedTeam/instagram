import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiPlusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";

export default function BottomNav({ sx }) {
  const [value, setValue] = React.useState("/");
  const router = useRouter();
  let icons = [
    [<AiOutlineHome />, "Home", "/"],
    [<RiSearchLine />, "Search", "/search"],
    [<HiOutlinePlusCircle />, "Create Post", "/create-post"],
    [<AiOutlineHeart />, "Likes", "/likes"],
  ];
  icons.forEach(([icon, text, path], i, arr) => {
    if (router.pathname.startsWith(path) && router.pathname === "/") {
      arr[i][0] = <AiFillHome />;
    }
    if (router.pathname.startsWith(path) && text === "Search") {
      arr[i][0] = <RiSearchFill />;
    }
    if (router.pathname.startsWith(path) && text === "Create Post") {
      arr[i][0] = <HiPlusCircle />;
    }
    if (router.pathname.startsWith(path) && text === "Likes") {
      arr[i][0] = <AiFillHeart />;
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(`/${newValue}`);
  };

  const styles = {
    main: {
      position: "fixed",
      left: 0,
      bottom: 0,
      width: "100%",
      background: (theme) => theme.palette.background.paper,
      boxShadow: (theme) => theme.customShadows.bottomNav,
      ...sx,
    },
  };

  return (
    <BottomNavigation
      sx={{ ...styles.main }}
      value={value}
      onChange={handleChange}
    >
      {icons.map(([icon, text, href]) => (
        <BottomNavigationAction
          disableRipple
          key={text}
          // label={text}
          value={href}
          icon={icon}
          sx={{
            minWidth: "unset",
            color: (theme) => theme.palette.text.primary,
            fontSize: "24px !important",
            padding: "8px 10px",
            "&.Mui-selected": { color: (theme) => theme.palette.text.primary },
          }}
        />
      ))}
      <BottomNavigationAction
        disableRipple
        // label={text}
        value={"/profile"}
        icon={
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="images/oval.png"
            alt="account"
          />
        }
        sx={{
          minWidth: "unset",
          color: (theme) => theme.palette.text.primary,
          fontSize: "24px !important",
          padding: "8px 10px",
          "&.Mui-selected": { color: (theme) => theme.palette.text.primary },
        }}
      />
    </BottomNavigation>
  );
}
