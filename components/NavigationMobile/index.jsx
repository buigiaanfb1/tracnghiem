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

const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.containerLogo}>
          <Typography className={classes.logo}>Logo</Typography>
        </div>
        <div className={classes.containerItems}>
          <NavLink
            IconBold={HomeIcon}
            IconOutlined={HomeOutlinedIcon}
            router={router}
            navLinkName=""
            classNames={classes}
            content="Home"
          />
          <NavLink
            IconBold={HistoryIcon}
            IconOutlined={HistoryIcon}
            router={router}
            navLinkName="history"
            classNames={classes}
            content="History"
          />
          <NavLink
            IconBold={AccountCircleIcon}
            IconOutlined={AccountCircleOutlinedIcon}
            router={router}
            navLinkName="profile"
            classNames={classes}
            content="Profile"
          />
          <NavLink
            IconBold={SettingsIcon}
            IconOutlined={SettingsOutlinedIcon}
            router={router}
            navLinkName="settings"
            classNames={classes}
            content="Settings"
          />
        </div>
        <div className={classes.signOutContainer}>
          <ExitToAppIcon className={classes.iconLogout} />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
