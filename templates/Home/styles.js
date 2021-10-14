import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  containerNavigationBar: {
    width: '100px',
  },
  containerHome: {
    width: 'calc(100vw - 100px)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto !important',
    transition: 'width 1s',
  },
  containerHomeOnExpand: {
    width: 'calc(100vw - 100px)',
    transition: 'width 1s',
  },
  containerProgressProfile: {
    flexGrow: 1,
    position: 'fixed',
    right: '0',
    top: '0',
    width: '300px',
    zIndex: '99',
    minHeight: '100vh',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    // transition: 'width 1s',
  },
  containerProgressProfileOnHide: {
    transform: 'translate(300px, 0)',
    transition: 'transform 1s',
  },
  containerLine: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    right: '0',
    top: '100px',
    width: '35px',
    height: '30px',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
    zIndex: '0',
    background: theme.palette.text.primary,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 2s',
    cursor: 'pointer',
  },
  line1: {
    width: '20px',
    height: '2px',
    background: 'black',
  },
  line2: {
    width: '20px',
    height: '2px',
    margin: '0.2rem 0',
    background: 'black',
  },
  line3: {
    width: '20px',
    height: '2px',
    background: 'black',
  },
}));
