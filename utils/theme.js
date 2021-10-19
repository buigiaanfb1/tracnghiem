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
      default: '#fafafa',
      paper: '#F6F9FC',
      course: '#fafafa',
      headerM: 'rgba(255,255,255,0.72)',
      contract: '#000',
    },
    text: {
      primary: '#5B587C',
      secondary: '#7D7C85',
      contract: '#000',
      white: '#fafafa',
    },
    border: {
      default: '#EEEDF4',
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
      headerM: 'rgba(10, 25, 41, 0.72)',
      contract: '#fafafa',
    },
    text: {
      primary: '#fafafa',
      secondary: '#939bb4',
      contract: '#fafafa',
      white: '#fafafa',
    },
    border: {
      default: '#EEEDF4',
    },
  },
  // typography: {
  //   fontFamily: '"Montserrat", sans-serif',
  // },
});

export { themeDark, themeLight };
