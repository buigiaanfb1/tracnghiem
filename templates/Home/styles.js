import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    transition: 'background-color 0.5s',
  },
  containerHome: {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto !important',
    transition: 'width 1s',
  },
}));
