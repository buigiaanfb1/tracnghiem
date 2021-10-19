import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '72%',
    marginTop: '1rem',
    boxShadow: '0 .125rem 0.5rem 0 rgba(48, 53, 69, 0.08)',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
  },
  container: {
    maxHeight: 500,
  },
  containerTable: {},
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: `1px solid ${theme.palette.background.course}`,
  },
  dateVsTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    fontSize: '14px',
  },
  title: {
    marginLeft: '5rem',
    fontSize: '14px',
    fontWeight: '500',
  },
  correctVsPts: {
    display: 'flex',
    alignItems: 'center',
  },
  correct: {
    fontSize: '14px',
  },
  pts: {
    marginLeft: '5rem',
    fontSize: '14px',
    fontWeight: '500',
  },
}));
