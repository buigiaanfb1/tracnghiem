import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    '&.MuiPaper-elevation1': {
      boxShadow: 'none',
    },
    padding: '0.75rem',
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  categoryType: {
    '&.MuiTypography-root': {
      fontSize: '34px',
      fontWeight: '700',
      margin: '1rem 0',
      textAlign: 'center',
    },
  },
  containerCourses: {
    padding: '0 0.25rem',
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    ['@media (min-width:1280px)']: {
      width: '20%',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% / 6)',
    },
    ['@media (max-width:1420px)']: {
      width: '20%',
    },
    ['@media (max-width:1280px)']: {
      width: '25%',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% / 4)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% / 3)',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100%)',
    },
  },
}));
