import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
<<<<<<< HEAD
import MainThemeProvider from "../theme";
=======
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import MyHead from "../containers/MyHead";

>>>>>>> c1e5e798ba0adce6ba74a9a3ff80b332205634db

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <MainThemeProvider>
=======
      <ThemeProvider theme={theme}>
        <MyHead />
>>>>>>> c1e5e798ba0adce6ba74a9a3ff80b332205634db
        <Component {...pageProps} />
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
