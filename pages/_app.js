import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme, themeDark, themeLight } from '../utils/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';

// icon
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
library.add(faClipboardCheck);

function MyApp({ Component, pageProps }) {
  const [light, setLight] = useState(true);
  const handleChangeTheme = () => {
    setLight((prev) => !prev);
  };

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      {/* <Button
        style={{ marginLeft: '10rem' }}
        onClick={() => setLight((prev) => !prev)}
      >
        Toggle Theme
      </Button> */}
      {/* Test */}
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
      {/* Test */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
