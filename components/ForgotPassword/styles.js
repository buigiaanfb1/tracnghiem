import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '32px',
    fontWeight: '500',
    marginBottom: '5rem',
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
    justifyContent: 'flex-start',
    margin: '0.75rem 0 0 0',
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      color: `#5138EE`,
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
  successContainer: {
    marginTop: '1rem',
    background: 'rgba(0, 255, 143, 0.15)',
    color: '#24B374',
    border: '1px solid rgba(0, 255, 143, 0.15)',
    padding: '1rem',
    textAlign: 'center',
  },
  titleSuccess: {
    '&.MuiTypography-root': {
      fontWeight: '500',
      fontSize: '22px',
    },
  },
}));
