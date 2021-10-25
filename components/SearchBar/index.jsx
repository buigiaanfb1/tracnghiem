import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Nhập từ khoá…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <Button className={classes.containerButton}>
            <SearchIcon />
          </Button>
        }
      />
    </div>
  );
};

export default SearchBar;
