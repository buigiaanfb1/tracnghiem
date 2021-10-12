import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
  },
  lottie: {
    '& rect': {
      fill: '#fafafa',
    },
  },
  container: {
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  containerNavigation: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    padding: '1rem',
  },
  content: {
    fontWeight: '600',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  paperPadding: {
    padding: '2rem',
    boxShadow: 'none',
    background: 'transparent',
  },
  paper: {
    padding: '0rem',
    boxShadow: 'none',
    background: 'transparent',
  },
  title: {
    fontSize: '50px',
    fontWeight: '800',
    lineHeight: 1.25,
  },
  smallDescription: {
    paddingTop: '2rem',
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
  },
  containerButton: {
    marginTop: '2rem',
  },
  button: {
    backgroundColor: 'rgba(134,103,222, 1)',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    '&:hover': {
      backgroundColor: 'rgba(134,103,222, 0.8)',
    },
  },
  containerIntroduce: {
    padding: '2rem',
  },
  containerFooter: {
    padding: '2rem',
  },
  containerIcon: {
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
  },
  icon: {
    fontSize: '30px',
  },
  containerIconPurple: {
    backgroundColor: '#F5ECFD',
  },
  containerIconYellow: {
    backgroundColor: '#FAF8E1',
  },
  containerIconGreen: {
    backgroundColor: '#DCFCEF',
  },
  iconPurple: {
    color: '#B54FE7',
  },
  iconYellow: {
    color: '#FDD65C',
  },
  iconGreen: {
    color: '#51ED98',
  },

  titleIntroduce: {
    marginTop: '1rem',
    fontSize: '20px',
    fontWeight: '700',
  },
  smallContentIntroduce: {
    marginTop: '1rem',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
  },
  paperBorn: {
    paddingRight: '2rem',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleBorn: {
    marginTop: '2rem',
    fontSize: '36px',
    fontWeight: '900',
  },
  smallContentBorn: {
    marginTop: '1rem',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.text.secondary,
  },
  parentBorn: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100px',
      height: '100px',
      backgroundColor: '#B54FE7',
      borderRadius: '4px',
      zIndex: '0',
    },
  },
  imgBorn: {
    position: 'relative',
    width: '70%',
    margin: '2.5rem',
    borderRadius: '4px',
    boxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)',
    WebkitBoxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)',
    MozBoxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)',
  },
  footer: {
    backgroundColor: '#F7F3FE',
  },
  titleFooter: {
    color: '#46366D',
    marginTop: '1rem',
    fontSize: '20px',
    fontWeight: '700',
  },
  containerItemsFooter: {
    marginTop: '1rem',
  },

  itemFooter: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0',
  },
  itemFooterIcon: {
    color: '#665291',
    marginRight: '8px',
  },
  itemFooterContent: {
    color: '#665291',
  },
}));
