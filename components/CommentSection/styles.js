import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  containerUserInput: {
    display: 'flex',
    alignItems: 'flex-start',
    '& img': {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
    },
  },
  containerOtherComments: {
    display: 'flex',
    marginTop: '1rem',
    alignItems: 'flex-start',
    '& img': {
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
    },
  },
  otherCommentsContent: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  inputAndButtons: {
    marginLeft: '1rem',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '& input': {
      border: 'none',
      color: theme.palette.text.primary,
      width: '100%',
      backgroundColor: 'transparent',
      fontSize: '14px',
      outline: 'none',
      borderBottom: `1px solid ${theme.palette.border.default}`,
      marginBottom: '0.5rem',
    },
  },
  containerButtons: {
    '& button': {
      padding: '10px 16px',
      border: 'none',
      marginLeft: '8px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  },
}));
