import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  // containerItems: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'column',
  //   marginTop: '2rem',
  // },
  item: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    transition: 'background 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#E4E2FC',
      transition: 'background 0.3s',
    },
    '&:hover svg': {
      color: '#918fff',
      transition: 'color 0.3s',
    },
  },

  // itemActive: {
  //   width: '100%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: '1rem',
  //   borderRadius: '8px',
  //   backgroundColor: 'rgba(20, 0, 255, 0.2)',
  //   cursor: 'pointer',
  //   '& svg': {
  //     color: '#918fff',
  //   },
  // },
  icon: {
    color: '#c9c8fa',
  },
}));
