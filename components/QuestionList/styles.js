import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: 'auto',
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.border.default}`,
    padding: '1rem',
  },
  container: {},
  titleHeader: {
    fontSize: '18px',
    fontWeight: '700',
  },
  totalQuestion: {
    fontSize: '16px',
    fontWeight: '500',
  },
  containerGuide: {
    display: 'flex',
    padding: '0.5rem 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionList: {
    display: 'flex',
    padding: '0 1rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerQuestion: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '57px',
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.unread,
    width: '40px',
    borderRadius: '8px',
    height: '40px',
    cursor: 'pointer',
    '& .MuiTypography-root': {
      fontWeight: '600',
      // color: theme.palette.text.black,
    },
  },
}));
