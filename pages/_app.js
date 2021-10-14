import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from '../utils/theme';
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [light, setLight] = useState(true);
  const handleChangeTheme = () => {
    setLight((prev) => !prev);
  };

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <div className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn" />
        <label htmlFor="dn" className="toggle" onClick={handleChangeTheme}>
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
