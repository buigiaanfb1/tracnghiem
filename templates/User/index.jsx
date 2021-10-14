import React from 'react';
import { useStyles } from './styles';
import NavigationBar from '../../components/Navigation';
import ProgressProfile from '../../components/ProgressProfile';
import UserProfile from '../../components/UserProfile';
import Layout from '../../components/layout/Layout';

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerNavigationBar}></div>
      <div className={classes.containerUserProfile}>
        <UserProfile />
      </div>
    </div>
  );
};

export default User;
