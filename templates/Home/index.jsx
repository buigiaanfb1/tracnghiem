import React from 'react';
import { useStyles } from './styles';
import NavigationBar from '../../components/Navigation';
import ProgressProfile from '../../components/ProgressProfile';
import Dashboard from '../../components/Dashboard';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerNavigationBar}>
        <NavigationBar />
      </div>
      <div className={classes.containerHome}>
        <Dashboard />
      </div>
      <div className={classes.containerProgressProfile}>
        <ProgressProfile />
      </div>
    </div>
  );
};

export default Home;