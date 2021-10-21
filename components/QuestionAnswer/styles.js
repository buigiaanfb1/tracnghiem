import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '1rem 2rem',
    height: '100%',
  },
  header: {
    '& .MuiTypography-root': {
      fontSize: '24px',
      fontWeight: '600',
    },
  },
  containerQuestion: {
    padding: '1rem 0',
  },
  content: {
    fontSize: '14px',
  },
  containerTools: {
    height: '50px',
    position: 'absolute',
    width: '100%',
    bottom: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));
