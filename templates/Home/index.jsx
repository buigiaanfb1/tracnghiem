import React from 'react';
import { useStyles } from './styles';
import Dashboard from '../../components/Dashboard';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerHome}>
      <Dashboard />
    </div>
  );
};

export default React.memo(Home);
