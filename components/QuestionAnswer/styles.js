import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem 2rem 0 2rem',
    height: 'calc(100% - 75px)',
    overflowY: 'auto',
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
    fontSize: '16px',
  },
  containerTools: {
    height: '75px',
    position: 'absolute',
    width: '100%',
    bottom: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.course,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',

    '& .MuiButton-root': {
      backgroundColor: '#5138EE',
      borderRadius: '24px',
      padding: '0.5rem 1.5rem',
      border: `2px solid #5138EE`,
      '& span': {
        color: '#fff',
        textTransform: 'none',
        fontWeight: '500',
      },
    },
  },
  title: {
    fontWeight: '500',
    margin: '1rem 0',
  },
  containerCheckbox: {
    display: 'flex',
  },
}));
