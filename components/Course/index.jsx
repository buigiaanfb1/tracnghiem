import React from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
const Course = ({ course }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerItem}>
        <img src={course.thumbnailImage} className={classes.cover} />
        <div className={classes.containerContent}>
          <Typography className={classes.title}>{course.name}</Typography>
          <Typography className={classes.description}>
            Độ khó: {course.level} <br />
            Tổng số câu: {course.totalQuestions}.
          </Typography>
          <div className={classes.containerButton}>
            <Link href={`course/${course.slug}-${course.slugId}`} passHref>
              <Button className={classes.buttonDoIt}>
                <Typography>Vào</Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
