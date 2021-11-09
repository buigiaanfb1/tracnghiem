import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgba(256,256,256,0.05)',
    borderRadius: '8px',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundText: {
    padding: '4rem',
    fontSize: '24px',
    fontWeight: '700',
  },
}));
