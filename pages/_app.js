import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainThemeProvider from "../theme";
import MyHead from "../containers/MyHead";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <CssBaseline />
        <MyHead />
        <Component {...pageProps} />
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
