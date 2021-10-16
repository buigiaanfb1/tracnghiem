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
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 1rem',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      '& > :first-child': {
        marginTop: '1rem',
      },
    },
  },
  buttonCreate: {
    '&.MuiButton-root': {
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
  },
  containerCourses: {
    padding: '0rem 2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },

  containerButtonLoginSignUp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    '&.MuiButton-root': {
      height: '40px',
      background: 'transparent',
      color: '#5951ed',
      borderRadius: '8px',
      padding: '0.75rem 1.25rem',
      border: '2px solid #5951ed',
      transition: 'all 0.3s',
      '& .MuiButton-label > p': {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
      },

      '&:hover': {
        background: '#3027d9',
        border: '2px solid #3027d9',
        color: '#FFF',
        transition: 'all 0.3s',
      },
    },
  },

  buttonSignUp: {
    '&.MuiButton-root': {
      height: '40px',
      background: '#5951ed',
      color: '#fff',
      border: '2px solid #5951ed',
      marginLeft: '1rem',
      borderRadius: '8px',
      padding: '0.75rem 1.25rem',
      transition: 'all 0.3s',
      '& .MuiButton-label > p': {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
      },
      '&:hover': {
        background: '#3027d9',
        border: '2px solid #3027d9',
        color: '#FFF',
        transition: 'all 0.3s',
      },
    },
  },
}));
