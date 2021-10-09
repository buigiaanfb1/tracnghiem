import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
