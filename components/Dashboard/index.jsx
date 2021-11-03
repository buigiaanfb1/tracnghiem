import React, { useEffect } from 'react';
import SearchBar from '../SearchBar';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import Courses from '../Courses';
import CategoryPins from '../CategoryPins';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <CategoryPins />
      {/* <div className={classes.containerHeader}>
        <SearchBar />
        <div className={classes.containerButtonLoginSignUp}>
          <Link href="/login" passHref>
            <Button className={classes.buttonLogin}>
              <Typography>Login</Typography>
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className={classes.buttonSignUp}>
              <Typography>Sign Up</Typography>
            </Button>
          </Link>
        </div>
        <Button className={classes.buttonCreate}>
          <Typography>Create Quiz</Typography> <AddIcon />
        </Button>
      </div> */}
      <div className={classes.containerCourses}>
        <Courses />
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
