import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  containerRadio: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.5rem',
  },
  radio: {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'green',
  },
  content: {
    marginLeft: '0.5rem',
    fontSize: '16px',
    fontWeight: '500',
  },
  border: {
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}));
