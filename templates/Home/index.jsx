import React, { useState } from 'react';
import { useStyles } from './styles';
import Dashboard from '../../components/Dashboard';

const Home = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.containerHome}>
      <Dashboard />
    </div>
  );
};

export default Home;
