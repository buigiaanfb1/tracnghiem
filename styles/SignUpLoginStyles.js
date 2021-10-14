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
    padding: '3rem 8rem',
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
  containerIntro: {
    padding: '3rem',
    color: '#fff',
  },
  introTitle: {
    fontSize: '30px',
    fontWeight: '500',
  },
  slogan: {
    width: '70%',
    padding: '1rem 0',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  ourStoryText: {
    fontSize: '16px',
    fontWeight: '500',
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '1px',
      display: 'block',
      backgroundColor: '#fff',
    },
    '&:hover': {
      opacity: '0.7',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translate(120%, -50%)',
  },
}));
