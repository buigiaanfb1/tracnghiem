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
  containerHeader: {
    padding: '2rem 3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCreate: {
    background: '#21B573',
    color: '#FFF',
    borderRadius: '8px',
    padding: '0.75rem 1.25rem',
    '& .MuiButton-label > p': {
      fontSize: '14px',
      textTransform: 'none',
      fontWeight: '500',
      lineHeight: '1.2',
    },
    '& .MuiButton-label > svg': {
      fontSize: '12px',
      fontWeight: '700',
      marginLeft: '4px',
    },
    '&:hover': {
      background: '#059e59',
      color: '#FFF',
    },
  },
  containerCourses: {
    padding: '0rem 2rem',
  },
}));
