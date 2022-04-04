import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";

export default function BottomNav({ icons, sx }) {
  const [value, setValue] = React.useState("recents");
  const router = useRouter();

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
          }}
        />
      ))}
    </BottomNavigation>
  );
}
