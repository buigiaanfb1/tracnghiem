import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: '1rem',
  },
  containerTabs: {
    width: '100%',
    margin: '1rem 0 0 2rem',
    display: 'inline-flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.course,
    borderRadius: '24px',
    boxShadow: '0 .125rem .3rem 0 rgba(48, 53, 69, 0.08)',
    padding: '0.5rem 0 2rem 0',
  },
  titleContainer: {
    padding: '0.5rem 1rem',
  },
  title: {
    fontSize: '18px',
    fontWeight: '300',
  },
  item: {
    position: 'relative',
    padding: '0.5rem 1rem',
    width: '100%',
    transition: 'all 0.3s',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '& .MuiTypography-root': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      transition: 'all 0.3s',
    },
    '&:hover': {
      transition: 'all 0.3s',
      background: 'rgba(20, 0, 255, 0.2)',
      '& .MuiTypography-root': {
        color: theme.palette.text.primary,
        fontSize: '14px',
        transition: 'all 0.3s',
      },
    },
  },
  itemSelected: {
    position: 'relative',
    padding: '0.5rem 1rem',
    width: '100%',
    fontWeight: '500',
    background: 'rgba(20, 0, 255, 0.2)',
    cursor: 'pointer',

    '& .MuiTypography-root': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: '500',
      color: theme.palette.text.contract,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '2px',
      height: '100%',
      display: 'block',
      background: theme.palette.background.contract,
    },
  },
}));
