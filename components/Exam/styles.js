import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
    // overflowY: 'auto',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
  },
  root: {
    padding: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.palette.background.paper,
  },
  containerQuestionList: {
    width: '30%',
    backgroundColor: theme.palette.background.course,
    borderRadius: '8px',
    boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
  },
  containerQuestionAnswer: {
    position: 'relative',
    width: 'calc(70% - 3rem)',
    backgroundColor: theme.palette.background.course,
    borderRadius: '8px',
    boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
  },
}));
