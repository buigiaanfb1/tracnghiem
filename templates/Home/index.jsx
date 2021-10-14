import React, { useState } from 'react';
import { useStyles } from './styles';
import NavigationBar from '../../components/Navigation';
import ProgressProfile from '../../components/ProgressProfile';
import Dashboard from '../../components/Dashboard';
import Layout from '../../components/layout/Layout';

const Home = () => {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerNavigationBar}></div>
      <div
        className={`${classes.containerHome} ${
          toggle && classes.containerHomeOnExpand
        }`}
      >
        <Dashboard />
      </div>
      {/* <div
        className={`${classes.containerProgressProfile} ${
          toggle && classes.containerProgressProfileOnHide
        }`}
      >
        <ProgressProfile onToggle={handleChangeToggle} />
      </div>
      {toggle && (
        <div className={classes.containerLine} onClick={handleChangeToggle}>
          <div className={classes.line1}></div>
          <div className={classes.line2}></div>
          <div className={classes.line3}></div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
