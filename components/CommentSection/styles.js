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
  titleComment: {
    '&.MuiTypography-root': {
      fontSize: '22px',
      textTransform: 'none',
      fontWeight: '500',
      marginBottom: '1rem',
      color: theme.palette.text.contract,
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
    '& textarea': {
      border: 'none',
      color: theme.palette.text.primary,
      width: '100%',
      backgroundColor: 'transparent',
      fontSize: '14px',
      outline: 'none',
      borderBottom: `1px solid ${theme.palette.border.default}`,
      marginBottom: '0.5rem',
      fontFamily: 'inherit',
      resize: 'none',
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
  submitButton: {
    '&.MuiButton-root': {
      background: '#5951ed',
      transition: 'all 0.3s',
      '& .MuiButton-label > p': {
        fontSize: '14px',

        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
        color: theme.palette.text.white,
      },
      '&:hover': {
        background: '#3027d9',
        transition: 'all 0.3s',
      },
    },
  },
  closeButton: {
    backgroundColor: 'transparent',
    '&.MuiButton-root': {
      boxShadow: 'none',
      transition: 'all 0.3s',
      '& .MuiButton-label > p': {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
        color: theme.palette.text.contract,
      },
      '&:hover': {
        transition: 'all 0.3s',
      },
    },
  },
  dropdownReplyComments: {
    marginLeft: '3.6rem',
    display: 'flex',
    alignItems: 'center',
    color: '#918FFF',
    cursor: 'pointer',
    '& span': {
      fontWeight: 500,
    },
  },
  buttonLoadMore: {
    marginTop: '1rem',
    '&.MuiButton-root': {
      width: '100%',
      backgroundColor: '#5951ED',
      color: '#fff',
      borderRadius: '24px',
    },
  },
}));
