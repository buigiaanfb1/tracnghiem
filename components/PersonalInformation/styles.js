import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {},
  containerUserUI: {
    display: 'flex',
    alignItems: 'center',
  },
  containerAvatar: {
    marginRight: '1rem',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    boxShadow: '0 .125rem .3rem 0 rgba(48, 53, 69, 0.08)',
  },
  containerEditTool: {
    backgroundColor: 'rgba(0, 255, 143, 0.15)',
    borderRadius: '24px',
    boxShadow: '0 .125rem .3rem 0 rgba(48, 53, 69, 0.08)',
    cursor: 'pointer',
  },
  text: {
    fontSize: '14px',
    fontWeight: '500',
    padding: '0.25rem 1rem',
    textDecoration: 'underline',
  },
  input: {
    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: '600',
    },
    '& input': {
      width: '90%',
      borderRadius: '24px',
      fontSize: '16px',
      marginTop: '8px',
      padding: '11px 1.5rem',
      outline: 'none',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
      border: `1px solid ${theme.palette.border.default}`,
      transition: 'background-color .5s',
      '&::placeholder': {
        color: theme.palette.text.secondary,
      },
    },
  },
  containerButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonSave: {
    '&.MuiButton-root': {
      margin: '0.25rem 2.5rem 0 0',
      display: 'flex',
      borderRadius: '8px',
      padding: '0.25rem 0',
      border: `2px solid #5138EE`,
      backgroundColor: '#5138EE',
      alignItems: 'center',
      '& .MuiButton-label': {
        '& img': {
          height: '24px',
          width: '24px',
        },
        '& p': {
          color: '#fff',
          textTransform: 'none',
          fontWeight: '500',
        },
      },
    },
  },
  error: {
    '&.MuiTypography-root': {
      height: '18px',
      margin: '0.2rem',
      fontSize: '12px',
      color: 'red',
      fontWeight: '500',
    },
  },
  containerUserInfo: {
    paddingTop: '2rem',
  },
}));
