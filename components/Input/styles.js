import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  containerLogin: {
    width: '50%',
  },
  containerBigImg: {
    width: '50%',
    backgroundColor: theme.palette.background.course,
  },
  bigImg: {
    width: '100%',
    height: '100vh',
    backgroundImage:
      "url('https://account.mongodb.com/static/images/auth/login_promo_desktop.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
  },
}));
