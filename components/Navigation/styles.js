import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '0px',
    left: '0',
    width: '100px',
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    height: '100vh',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    zIndex: '1',
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
    cursor: 'pointer',
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
    backgroundColor: 'rgba(20, 0, 255, 0.2)',
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
    bottom: '10%',
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
  buttonSignIn: {
    '&.MuiButton-root': {
      width: '100%',
      background: '#5951ed',
      color: '#fff',
      borderRadius: '0',
      padding: '0.75rem',
      transition: 'all 0.3s',
      '& .MuiButton-label': {
        fontSize: '12px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
      },
      '&:hover': {
        background: '#3027d9',
        color: '#FFF',
        transition: 'all 0.3s',
      },
    },
  },
}));
