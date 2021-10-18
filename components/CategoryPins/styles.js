import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: '10',
    background: `url(https://learn.viblo.asia/images/topic-recommend-bg.png) no-repeat 100% 0`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    padding: '2rem 2.5rem',
    margin: '0rem 0 2rem',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#FFF',
  },
  title: {
    fontWeight: '700',
  },
  description: {
    fontSize: '16px',
    padding: '0.5rem',
    fontWeight: '700',
  },
  containerPins: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
