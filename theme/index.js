import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import { Box } from "@mui/material";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const customTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            background: {
              default: "#fafafa",
            },
          }
        : {
            // palette values for dark mode
          }),
    },
    shadowsHeader: {
      header: "rgba(100, 100, 111, 0.1) 0px 7px 20px 0px;",
      card: "rgba(100, 100, 111, 0.2) 0px 7px 35px 0px;",
      block: "0px 1px 3px rgb(3 0 71 / 9%)",
      box: "0px 8px 45px rgb(3 0 71 / 10%)",
    },
  });
};

function MainThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => customTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
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
    </ColorModeContext.Provider>
  );
}

export default MainThemeProvider;
