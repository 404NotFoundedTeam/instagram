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
    customShadows: {
      header: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
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
