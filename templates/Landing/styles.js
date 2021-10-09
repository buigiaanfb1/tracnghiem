import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 500,
  },
  containerNavigation: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    padding: '1rem',
  },
  content: {
    fontWeight: '600',
    cursor: 'pointer',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paperPadding: {
    padding: '2rem',
    boxShadow: 'none',
  },
  paper: {
    padding: '0rem',
    boxShadow: 'none',
  },
  title: {
    fontSize: '50px',
    fontWeight: '800',
    lineHeight: 1.25,
  },
  smallDescription: {
    paddingTop: '2rem',
    fontSize: '20px',
    fontWeight: '500',
    color: '#4E555A',
  },
  containerButton: {
    marginTop: '2rem',
  },
  button: {
    backgroundColor: '#465dff',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    '&:hover': {
      backgroundColor: '#263ff7',
    },
  },
}));
