import React from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
const Course = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerItem}>
        <img
          src="https://marketing24h.vn/wp-content/uploads/2020/11/ROI-Content-Marketing.jpg"
          className={classes.cover}
        />
        <div className={classes.containerContent}>
          <Typography className={classes.title}>Lịch sử</Typography>
          <Typography className={classes.description}>
            Độ khó: Trung bình. <br />
            Tổng số câu: 40.
          </Typography>
          <div className={classes.containerButton}>
            <Link href="/course/1">
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
