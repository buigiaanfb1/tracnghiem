import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from '../utils/theme';
import { wrapper } from '../redux/config';
import React, { useState, useEffect } from 'react';
import ToggleTheme from '../components/ToggleTheme';
import NavigationBar from '../components/Navigation';

function MyApp({ Component, pageProps }) {
  const [light, setLight] = useState(false);
  const handleChangeTheme = () => {
    setLight((prev) => !prev);
  };

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={!light ? themeLight : themeDark}>
      {/* <NavigationBar /> */}
      <CssBaseline />
      <ToggleTheme onChangeTheme={handleChangeTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
