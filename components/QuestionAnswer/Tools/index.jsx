import { Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';
const Tools = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerTools}>
      <Button>dasd</Button>
      <Button>dasd</Button>
      <Button>dasd</Button>
    </div>
  );
};

export default Tools;
