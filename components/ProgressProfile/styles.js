import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    right: '0',
    top: '0',
    width: '300px',
    zIndex: '99',
    minHeight: '100vh',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
  },

  container: {
    padding: '2rem 1rem',
  },
  containerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerIconHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background color 0.3s',
    '&:hover': {
      background: '#E4E2FC',
      transition: 'background 0.3s',
    },
    '&:hover svg': {
      color: '#918fff',
      transition: 'color 0.3s',
    },
  },
  icon: {
    color: '#D2D2D2',
  },
  containerUser: {
    padding: '3rem 0 1rem 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: '125px',
    height: '125px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  username: {
    margin: '0.75rem 0',
    fontSize: '24px',
    fontWeight: '700',
  },
  containerJoinedTotal: {
    padding: '0.5rem 1rem',
    borderRadius: '24px',
  },
  containerJoinedYellow: {
    width: '48%',
    background: 'rgb(255, 156, 0, 0.2)',
  },
  containerTotalGreen: {
    width: '48%',
    background: 'rgba(0, 255, 143, 0.2)',
  },

  iconTotalYellow: {
    color: '#F8AF3C',
    fontSize: '20px',
  },
  iconTotalGreen: {
    color: '#24B374',
    fontSize: '20px',
  },

  containerTotalJoined: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    padding: '0.5rem 0',
    fontWeight: '400',
    lineHeight: '1.2',
    fontSize: '14px',
  },
  descriptionGreen: {
    color: '#24B374',
  },
  descriptionYellow: {
    color: '#F8AF3C',
  },
  number: {
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
  },
  numberGreen: {
    color: '#24B374',
  },
  numberYellow: {
    color: '#F8AF3C',
  },
}));
