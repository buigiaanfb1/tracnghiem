import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import Course from '../Course';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

const Courses = () => {
  const classes = useStyles();
  const trendingCourses = useSelector(
    (state) => state.trending.trendingCourses
  );

  useEffect(() => {
    console.log(trendingCourses);
  }, [trendingCourses]);

  const handleRenderCourse = () => {
    return trendingCourses.map((course, index) => {
      return (
        <div className={classes.item} key={course._id}>
          <Paper className={classes.paper}>
            <Course course={course} />
          </Paper>
        </div>
      );
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.categoryType}>
          Popular Courses
        </Typography>
        <div className={classes.containerCourses}>{handleRenderCourse()}</div>
      </div>
    </div>
  );
};

export default React.memo(Courses);
