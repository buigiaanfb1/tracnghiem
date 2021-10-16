import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import Course from '../Course';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Courses = () => {
  const classes = useStyles();

  const handleRenderCourse = () => {
    return Array(10)
      .fill(10)
      .map((course, index) => {
        return (
          <div className={classes.item} key={index}>
            <Paper className={classes.paper}>
              <Course />
            </Paper>
          </div>
        );
      });
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.categoryType}>Popular</Typography>
        <div className={classes.containerCourses}>{handleRenderCourse()}</div>
      </div>
    </div>
  );
};

export default Courses;
