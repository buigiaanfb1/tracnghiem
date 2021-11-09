import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const CommentsNotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.notFoundText}>
        Chưa có đánh giá!
      </Typography>
    </div>
  );
};

export default CommentsNotFound;
