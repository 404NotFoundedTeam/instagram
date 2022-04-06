import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainThemeProvider from "../theme";
import MyHead from "../containers/MyHead";
import { Box, CssBaseline } from "@mui/material";
import Layout from "../components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";
import React from "react";
import Link from "next/link";
import ButtonPrimary from "../components/miniComp/ButtonPrimary";

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = React.useState(true);
  return (
    <Provider store={store}>
      <MainThemeProvider>
        {isAuth ? (
          <Layout>
            <CssBaseline />
            <MyHead />
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Box
            sx={{
              width: "100%",
              minHeight: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Link href={"/auth"}>
              <Box>
                <ButtonPrimary>Login</ButtonPrimary>
              </Box>
            </Link>
          </Box>
        )}
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
