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
    width: 'calc(100vw - 100px - 300px)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto !important',
  },
  containerProgressProfile: {
    flexGrow: '2',
  },
}));
