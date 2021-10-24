import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem 2rem 0 2rem',
    height: 'calc(100% - 75px)',
    overflowY: 'auto',
  },
  header: {
    '& .MuiTypography-root': {
      fontSize: '24px',
      fontWeight: '600',
    },
  },
  containerQuestion: {
    padding: '1rem 0',
  },
  content: {
    fontSize: '16px',
  },
  containerTools: {
    height: '75px',
    position: 'absolute',
    width: '100%',
    bottom: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.course,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',

    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      marginRight: '8px',
    },

    '& .MuiButton-root': {
      backgroundColor: '#5138EE',
      borderRadius: '24px',
      padding: '0.5rem 1.5rem',
      border: `2px solid #5138EE`,
      '& span': {
        color: '#fff',
        textTransform: 'none',
        fontWeight: '500',
      },
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  saveButton: {
    '&.MuiButton-root': {
      backgroundColor: 'rgba(0, 255, 143, 0.8)',
      border: `2px solid rgba(0, 255, 143, 1)`,
      '& span': {
        color: 'black',
        textTransform: 'none',
        fontWeight: '500',
      },
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  prevButton: {
    '&.MuiButton-root': {
      backgroundColor: theme.palette.background.unread,
      border: `2px solid transparent`,
      '& span': {
        color: theme.palette.text.primary,
        textTransform: 'none',
        fontWeight: '500',
      },
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  nextButton: {
    '&.MuiButton-root': {
      backgroundColor: theme.palette.background.unread,
      border: `2px solid transparent`,
      '& span': {
        color: theme.palette.text.primary,
        textTransform: 'none',
        fontWeight: '500',
      },
      '& .MuiSvgIcon-root': {
        fontSize: '16px',
        marginLeft: '8px',
        marginRight: '0',
      },
    },
  },
  containerAnswer: {
    margin: '1rem 0',
    padding: '0.25rem 0 1rem 0',
    borderTop: `1px solid ${theme.palette.border.default}`,
    borderBottom: `1px solid ${theme.palette.border.default}`,

    '& .Mui-checked': {
      position: 'relative',
    },

    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
      transition: 'none !important',
    },
  },
  title: {
    fontWeight: '500',
    margin: '1rem 0',
  },
  containerCheckbox: {
    display: 'flex',
  },
  removeAnswer: {
    '&.MuiTypography-root': {
      fontWeight: '500',
      fontSize: 14,
      cursor: 'pointer',
      opacity: '0.6',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));
