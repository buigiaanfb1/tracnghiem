import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  containerPin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '24%',
    padding: '1rem 2rem',
    backgroundColor: theme.palette.background.pin,
    borderRadius: '8px',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translate(0, -5px)',
    },
  },
  containerContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerImage: {
    '& img': {
      width: '60px',
      height: '60px',
    },
  },
  content: {
    fontSize: '20px',
    fontWeight: '500',
  },
  description: {
    fontSize: '14px',
    fontWeight: '500',
  },
}));
