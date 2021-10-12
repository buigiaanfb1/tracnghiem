import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '0.75rem',
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  categoryType: {
    fontSize: '26px',
    fontWeight: '500',
    marginLeft: '1rem',
  },
  containerCourses: {
    padding: '0 0.25rem',
  },
}));
