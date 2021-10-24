import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: '10',
    background: `url(https://firebasestorage.googleapis.com/v0/b/facebook-for-cv.appspot.com/o/picture-public-post%2F3OTZs7W72RMHSIdTxG8NrXt849I2%2F60bc1afd-bf22-4413-912f-bf3253b21c58?alt=media&token=5ff0d18f-a1bb-4be7-a416-94c1ddd1cea3) no-repeat 100% 0`,
    backgroundSize: 'cover',
    // backgroundAttachment: 'fixed',
    padding: '2rem 3rem',
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
