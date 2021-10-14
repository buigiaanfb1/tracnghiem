import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '100px',
    width: 'calc(100vw-100px)',
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto !important',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
    zIndex: '1',
  },
}));
