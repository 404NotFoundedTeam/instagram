import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainThemeProvider from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainThemeProvider>
        <Component {...pageProps} />
      </MainThemeProvider>
    </Provider>
  );
}

export default MyApp;
