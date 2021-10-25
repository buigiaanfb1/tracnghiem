import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
    padding: '2rem 3rem',
    // overflowY: 'auto',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
  },
  container: {
    display: 'flex',
  },
  containerLeft: {
    width: '350px',
  },
  containerRight: {
    width: 'calc(100vw - 375px)',
    marginLeft: '3rem',
  },
  containerChip: {
    marginTop: '1rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${theme.palette.border.default}`,
  },
  titleCate: {
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '1rem 0',
  },
}));
