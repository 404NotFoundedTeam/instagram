import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainThemeProvider from "../theme";
import MyHead from "../containers/MyHead";
import { CssBaseline } from "@mui/material";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <Layout>
          <CssBaseline />
          <MyHead />
          <Component {...pageProps} />
        </Layout>
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
