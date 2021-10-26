import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from '../utils/theme';
import { wrapper } from '../redux/config';
import React, { useState, useEffect } from 'react';
import ToggleTheme from '../components/ToggleTheme';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, ...pageProps }) {
  const [light, setLight] = useState(false);
  const handleChangeTheme = () => {
    setLight((prev) => !prev);
  };

  useEffect(() => {
    let lStorage = JSON.parse(localStorage.getItem('ey10_app_user_settings'));
    if (lStorage) {
      setLight(lStorage.theme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem(
      'ey10_app_user_settings',
      JSON.stringify({
        theme: light,
      })
    );
  }, [light]);

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={!light ? themeLight : themeDark}>
      <CssBaseline />
      <ToggleTheme onChangeTheme={handleChangeTheme} theme={light} />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
