import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            background: {
              default: "#fafafa",
              paper: "#fff",
              input: "#fff",
            },
            text: {
              primary: "#262626",
            },
          }
        : {
            background: {
              default: "rgba(18, 18, 18, 1)",
              paper: "#2D2D2D",
              input: "#121212",
            },
            text: {
              primary: "#fff",
            },
          }),
    },
    customShadows: {
      header: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
      bottomNav: "rgba(17, 17, 26, 0.1) 0px -1px 0px",
      card: "0px 0px 0 1px rgba(17, 17, 26, 0.1)",
    },
    paper: {
      background: "background.paper",
    },
    
    customBorders: {
      input: "0.5px solid rgba(0, 0, 0, 0.1);",
    },
  });
};

function MainThemeProvider({ children }) {
  const mode = useSelector((state) => state.main.mode);

  const theme = useMemo(() => customTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        variant="section"
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default MainThemeProvider;
