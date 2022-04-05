import { Box } from "@mui/material";
import React from "react";

export default function RoundImg({
  size = 57,
  userName = "John",
  src,
  borderColor,
  onClick,
  live = false,
  isBorder = true,
}) {
  let gradient =
    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)";
  const styles = {
    main: {
      borderRadius: "50%",
      width: `${size}px`,
      height: `${size}px`,
      background: live ? "#d6249f" : borderColor || gradient,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    secondary: {
      background: (theme) => theme.palette.background.paper,
      borderRadius: "50%",
      width: `${size - 4}px`,
      height: `${size - 4}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      borderRadius: "50%",
      width: `${size - 6.5}px`,
      height: `${size - 6.5}px`,
      objectFit: "cover",
      objectPosition: "center",
    },
    badge: {
      position: "absolute",
      fontSize: "9px",
      padding: "1px 4px",
      color: "white",
      backgroundColor: "#d6249f",
      borderRadius: "4px",
      bottom: "-4px",
    },
  };
  return (
    <>
      <Box
        onClick={() => console.log("user")}
        sx={{ ...styles.main, ...(isBorder ? {} : { background: "none" }) }}
      >
        <Box sx={{ ...styles.secondary }}>
          <img
            style={{ ...styles.img }}
            src={src || "/images/person.jpg"}
            alt={userName || "user"}
          />
          {live && <div style={{ ...styles.badge }}>LIVE</div>}
        </Box>
      </Box>
      <p></p>
    </>
  );
}
