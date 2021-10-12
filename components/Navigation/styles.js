import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100px',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  containerLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0.5rem',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 700,
  },
  containerItems: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
  },
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    transition: 'background 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#E4E2FC',
      transition: 'background 0.3s',
    },
    '&:hover svg': {
      color: '#918fff',
      transition: 'color 0.3s',
    },
  },

  itemActive: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#E4E2FC',
    cursor: 'pointer',
    '& svg': {
      color: '#918fff',
    },
  },
  icon: {
    color: '#c9c8fa',
  },
  iconLogout: {
    color: '#C9917C',
  },
  signOutContainer: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: 'transparent',
    transition: 'background 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fcd8cc',
      transition: 'background 0.3s',
    },
    '&:hover svg': {
      color: '#c46d4d',
    },
  },
}));
