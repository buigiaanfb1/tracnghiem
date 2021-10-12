import { createTheme } from '@material-ui/core/styles';

const themeLight = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 961,
      lg: 1281,
      xl: 1921,
    },
  },
  palette: {
    background: {
      default: '#fff',
      paper: '#FFF9FF',
      course: '#fff',
    },
    text: {
      primary: '#5B587C',
      secondary: '#7D7C85',
    },
  },
  // typography: {
  //   fontFamily: '"Montserrat", sans-serif',
  // },
});

const themeDark = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 961,
      lg: 1281,
      xl: 1921,
    },
  },
  palette: {
    background: {
      default: '#1A1D28',
      paper: '#13141B',
      course: '#282E3E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#939bb4',
    },
  },
  // typography: {
  //   fontFamily: '"Montserrat", sans-serif',
  // },
});

export { themeDark, themeLight };
