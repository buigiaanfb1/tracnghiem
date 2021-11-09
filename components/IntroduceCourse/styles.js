import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
    position: 'relative',
    // overflowY: 'auto',
  },
  bodyScroll: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden auto',
  },

  bigImg: {
    width: '100%',
    position: 'relative',
    zIndex: '10',
    background: `url(https://learn.viblo.asia/images/topic-recommend-bg.png) no-repeat 100% 0`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    padding: '4rem 3rem',
  },
  container: {
    display: 'flex',
    color: theme.palette.text.white,
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  leftHand: {
    width: '68%',
    paddingRight: '3rem',
  },
  wrapperCreatedVsUpdated: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
  },
  created: {
    '&.MuiTypography-root': {
      fontSize: '14px',
      display: 'inline-block',
    },
    '&.MuiTypography-root span': {
      fontSize: '14px',
      color: '#918FFF',
      textDecoration: 'underline',
    },
  },
  updated: {
    '&.MuiTypography-root': {
      fontSize: '14px',
      marginLeft: '1rem',
    },
  },
  rightHand: {
    marginTop: '3rem',
  },
  containerModalCourse: {
    width: '340px',
    position: '-webkit-sticky',
    position: 'sticky',
    top: '5%',
    zIndex: '1100',
    left: '68%',
    boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
    background: theme.palette.background.course,
    borderRadius: '8px',
  },
  cover: {
    width: '100%',
    maxHeight: '275px',
    objectFit: 'cover',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  containerDescription: {
    padding: '0 1.5rem 1rem',
  },
  containerButton: {
    '&.MuiButton-root': {
      width: '100%',
      // height: '40px',
      background: '#5951ed',
      color: '#fff',
      border: '2px solid #5951ed',
      borderRadius: '24px',
      margin: '1rem 0',
      padding: '0.75rem 1.25rem',
      transition: 'all 0.3s',
      '& .MuiButton-label > p': {
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: '500',
        lineHeight: '1.2',
        color: '#fff',
      },
      '&:hover': {
        background: '#3027d9',
        border: '2px solid #3027d9',
        color: '#FFF',
        transition: 'all 0.3s',
      },
    },
  },
  include: {
    '&.MuiTypography-root': {
      fontSize: '18px',
      textTransform: 'none',
      fontWeight: '500',
      color: theme.palette.text.contract,
    },
  },
  includeItem: {
    '&.MuiTypography-root': {
      margin: '0.25rem 0',
      fontSize: '15px',
      color: theme.palette.text.primary,
    },
  },
  containerOfDescription: {
    padding: '2rem 3rem',
    width: '68%',
  },
  titleDescription: {
    '&.MuiTypography-root': {
      fontSize: '22px',
      textTransform: 'none',
      fontWeight: '500',
      marginBottom: '1rem',
      color: theme.palette.text.contract,
    },
  },
  containerOfComment: {
    padding: '2rem 3rem',
    width: '68%',
  },
}));
