import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
