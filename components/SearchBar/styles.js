import { alpha, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {},
  },
  inputRoot: {
    color: 'inherit',
    borderRadius: '8px',
    width: '100%',
    // border: '1px solid #e4dfe6',
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 .125rem .9rem 0 rgba(48, 53, 69, 0.08)',
    '& .MuiInputBase-input': {
      height: '1.75rem',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `0.75rem`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('md')]: {
      // width: '300px',
    },
  },
  containerButton: {
    '&.MuiButton-root': {
      // backgroundColor: '#5951ed',
      borderRadius: '8px',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      // padding: '6px 0',
      minWidth: '44px',
      height: '44px',
    },
    '& .MuiSvgIcon-root': {
      cursor: 'pointer',
      fill: '#5951ed',
    },
  },
}));
