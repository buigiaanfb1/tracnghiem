import { createTheme } from '@material-ui/core/styles';

const themeLight = createTheme({
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
