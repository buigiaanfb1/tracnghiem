import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../styles';

const QuestionList = () => {
  const classes = useStyles();

  return Array(40)
    .fill(40)
    .map((question, index) => {
      return (
        <div className={classes.containerQuestion} key={index}>
          <div className={classes.question}>
            <Typography>{index}</Typography>
          </div>
        </div>
      );
    });
};

export default QuestionList;
