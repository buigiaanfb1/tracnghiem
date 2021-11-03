import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cover: {
    width: '100%',
    maxHeight: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: 'auto',
  },
  containerItem: {
    borderRadius: '8px',
    background: theme.palette.background.course,
    boxShadow: '0 .125rem .2rem 0 rgba(48, 53, 69, 0.08)',
    textAlign: 'left',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translate(0, -10px)',
    },
  },
  containerContent: {
    padding: '0rem 1.25rem 0.25rem 1.25rem',
  },
  title: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.text.contract,
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    fontWeight: '500',
  },
  buttonDoIt: {
    '&.MuiButton-root': {
      margin: '1rem 0',
      background: '#736CED',
      color: '#FFF',
      borderRadius: '8px',
      padding: '0.5rem 1.25rem',
      '& .MuiButton-label > p': {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
      },
      '&:hover': {
        background: '#5951ed',
        color: '#FFF',
      },
    },
  },
  containerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
