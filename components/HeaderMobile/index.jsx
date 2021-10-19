import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationMobile from '../NavigationMobile';
import Link from 'next/link';

const HeaderMobile = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <div
          className={classes.containerHeader}
          onClick={() => setVisible((prev) => !prev)}
        >
          <div className={classes.buttonOpenNavBarContainer}>
            <MenuIcon className={classes.icon} />
          </div>
          <Link href="" passHref>
            <Typography className={classes.logoText}>Easy10</Typography>
          </Link>
        </div>
      </div>
      {visible ? (
        <>
          <NavigationMobile />
          <div
            className={classes.exitContainer}
            onClick={() => setVisible((prev) => !prev)}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default HeaderMobile;
