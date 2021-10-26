import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  title: {
    fontSize: '32px',
    fontWeight: '500',
  },
  description: {
    fontWeight: '500',
    marginBottom: '2rem',
  },
  buttonGoogle: {
    '&.MuiButton-root': {
      width: '100%',
      margin: '1rem 0',
      display: 'flex',
      borderRadius: '24px',
      padding: '0.5rem 0',
      border: `2px solid ${theme.palette.border.default}`,
      alignItems: 'center',
      '& .MuiButton-label': {
        '& img': {
          height: '24px',
          width: '24px',
        },
        '& p': {
          textTransform: 'none',
          fontWeight: '500',
        },
      },
    },
  },
  buttonLogin: {
    '&.MuiButton-root': {
      width: '100%',
      margin: '0.75rem 0',
      display: 'flex',
      borderRadius: '24px',
      padding: '0.5rem 0',
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
      '& .MuiCircularProgress-root': {
        color: '#fff',
        marginRight: '8px',
      },
    },
  },
  containerOr: {
    position: 'relative',
    width: '100%',
    height: '2px',
    margin: '2rem 0',
    background: theme.palette.border.default,
  },
  containerTypo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0 1rem',
    backgroundColor: theme.palette.background.default,
    '& .MuiTypography-root': {
      fontSize: '14px',
      fontWeight: '500',
      opacity: 1,
    },
  },
  input: {
    '& .MuiTypography-root': {
      fontSize: '16px',
      fontWeight: '600',
    },
    '& input': {
      width: '100%',
      borderRadius: '24px',
      fontSize: '16px',
      marginTop: '8px',
      padding: '11px 1.5rem',
      outline: 'none',
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      border: `2px solid ${theme.palette.border.default}`,
      '&::placeholder': {
        color: theme.palette.text.secondary,
      },
    },
  },
  forgotPassword: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '0.75rem 0 0 0',
  },
  blackText: {
    '&.MuiTypography-root': {
      display: 'inline-block',
      fontSize: '14px',
      fontWeight: '500',
      opacity: 1,
    },
  },
  purpleText: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: '500',
    opacity: 1,
    color: `#5138EE`,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
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
}));
