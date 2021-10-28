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
      pin: '#fafafa',
      unread: '#eef3f7',
      always: '#fff',
      activePagination: 'rgba(20, 0, 255, 0.2)',
    },
    text: {
      primary: '#5B587C',
      secondary: '#7D7C85',
      contract: '#000',
      white: '#fafafa',
    },
    border: {
      default: '#EEEDF4',
      question: '#8785ff',
    },
  },
  overrides: {
    MuiRadio: {
      colorSecondary: {
        color: '#939BB4',
        '&$checked': {
          color: '#939BB4',
          transition: 'none',
          '&&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: '#939BB4',
        '&$checked': {
          color: '#939BB4',
          '&&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
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
      pin: '#19183A',
      unread: 'rgba(256,256,256,0.1)',
      always: '#000',
      activePagination: '#918FFF',
    },
    text: {
      primary: '#fafafa',
      secondary: '#939bb4',
      contract: '#fafafa',
      white: '#fafafa',
    },
    border: {
      default: 'rgba(256,256,256, 0.4)',
      question: '#8785ff',
    },
  },
  overrides: {
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: '#939bb4',
          '&&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: '#939BB4',
        '&$checked': {
          color: '#939BB4',
          '&&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export { themeDark, themeLight };
