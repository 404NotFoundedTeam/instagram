import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainThemeProvider from "../theme";
import MyHead from "../containers/MyHead";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <MyHead />
        <Component {...pageProps} />
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
