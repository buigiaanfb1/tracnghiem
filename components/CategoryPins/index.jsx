import { Typography } from '@material-ui/core';
import React from 'react';
import Pin from '../Pin';
import { useStyles } from './styles';

const CategoryPins = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" className={classes.title}>
          Bạn đang muốn học gì?
        </Typography>
        <Typography className={classes.description}>
          Những chủ đề nổi bật nhất
        </Typography>
      </div>
      <div className={classes.containerPins}>
        {Array(8)
          .fill(8)
          .map((pin, index) => {
            return <Pin key={index} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPins;
