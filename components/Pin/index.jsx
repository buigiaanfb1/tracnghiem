import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const Pin = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerPin}>
      <div className={classes.containerContent}>
        <Typography className={classes.content}>Vue.js</Typography>
        <Typography className={classes.description}>1 quizzes</Typography>
      </div>
      <div className={classes.containerImage}>
        <img src="https://learn.viblo.asia/uploads/b/b/bbb3bc74-abd2-4f46-9523-84bf323c8b9d.png" />
      </div>
    </div>
  );
};

export default Pin;
