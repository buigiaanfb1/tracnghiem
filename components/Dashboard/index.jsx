import React from 'react';
import SearchBar from '../SearchBar';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import Courses from '../Courses';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <div className={classes.containerHeader}>
        <SearchBar />
        <Button className={classes.buttonCreate}>
          <Typography>Create Quiz</Typography> <AddIcon />
        </Button>
      </div>
      <div className={classes.containerCourses}>
        <Courses />
      </div>
    </div>
  );
};

export default Dashboard;
