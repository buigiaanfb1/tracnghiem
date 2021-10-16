import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavLink from './../NavLink';
import { mainNavigate } from '../../common/Link';

const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleRenderNavigate = () => {
    return mainNavigate.map((link) => {
      return (
        <NavLink
          IconBold={link.IconBold}
          IconOutlined={link.IconOutlined}
          router={router}
          navLinkName={link.navLinkName}
          abstractName={link.abstractName}
          classNames={classes}
          key={link.keyName}
        />
      );
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerLogo}>
        <Typography className={classes.logo}>Logo</Typography>
      </div>
      <div className={classes.containerItems}>{handleRenderNavigate()}</div>
      <div className={classes.signOutContainer}>
        <ExitToAppIcon className={classes.iconLogout} />
      </div>
    </div>
  );
};

export default NavigationBar;
