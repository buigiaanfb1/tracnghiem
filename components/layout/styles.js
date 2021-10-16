import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  containerNavigationBar: {
    width: '100px',
  },
  containerNavigationBarOnHide: {
    display: 'none',
  },
  containerComponent: {
    width: 'calc(100vw - 100px)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto !important',
    transition: 'width 1s',
  },
  containerComponentOnHide: {
    width: 'calc(100vw)',
  },
}));
