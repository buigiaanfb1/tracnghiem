import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    borderRadius: '8px',
    overflow: 'hidden',
    // border: `2px solid ${theme.palette.border.default}`,
    boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
    background: theme.palette.background.course,
    margin: '1.5rem 0',
    cursor: 'pointer',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translate(0, -3px)',
    },
  },
  containerImage: {
    width: '40%',
    '& img': {
      borderRadius: '8px',
      width: '275px',
      height: '100%',
    },
  },
  containerDescription: {
    padding: '0.5rem 0rem',
    display: 'flex',
    flexDirection: 'column',
  },

  level: {
    '&.MuiTypography-root': {
      fontWeight: '500',
      padding: '0.25rem 1rem',
      display: 'inline-block',
      color: '#24B374',
      fontSize: '14px',
      borderRadius: '8px',
      backgroundColor: 'rgba(0, 255, 143, 0.15)',
      lineHeight: '1.2',
    },
  },
  title: {
    '&.MuiTypography-root': {
      fontWeight: '500',
      fontSize: '24px',
      padding: '0.25rem 0',
    },
  },
  containerStatistics: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    display: 'flex',
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      marginRight: '4px',
      color: '#918fff',
    },
    '& .MuiTypography-root': {
      fontSize: '14px',
      fontWeight: '500',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '0.75rem',
  },
}));
