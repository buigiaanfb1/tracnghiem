import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '1100',
    width: '100%',
    backgroundColor: theme.palette.background.headerM,
    backdropFilter: 'blur(20px)',
  },
  containerHeader: {
    padding: '1rem 1rem',
    display: 'flex',
    alignItems: 'center',
  },
  buttonOpenNavBarContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0.15rem',
    background: 'transparent',
  },
  icon: {
    color: theme.palette.background.contract,
  },
  logoText: {
    marginLeft: '8px',
    fontSize: '20px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  exitContainer: {
    position: 'fixed',
    top: '0px',
    left: '0',
    width: '100vw',
    height: '100vh',
    backdropFilter: 'blur(20px)',
    backgroundColor: theme.palette.background.headerM,
    zIndex: '1100',
  },
}));
