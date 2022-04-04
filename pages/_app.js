import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import MyHead from "../containers/MyHead";


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MyHead />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
