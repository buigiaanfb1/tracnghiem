import React from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
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
          <Typography className={classes.title}>Lich Su</Typography>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor
            sit amet consectetur adipisicing.
          </Typography>
          <div className={classes.containerButton}>
            <Button className={classes.buttonDoIt}>
              <Typography>Vào</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
