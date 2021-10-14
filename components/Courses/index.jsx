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
          <Grid item xl={2} lg={3} md={3} xs={12} key={index}>
            <Paper className={classes.paper}>
              <Course />
            </Paper>
          </Grid>
        );
      });
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.categoryType}>Popular</Typography>
        <div className={classes.containerCourses}>
          <Grid container>{handleRenderCourse()}</Grid>
        </div>
      </div>
    </div>
  );
};

export default Courses;
