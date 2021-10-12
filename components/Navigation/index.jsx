import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavLink from './NavLink';

const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogo}>
        <Typography className={classes.logo}>Easy10</Typography>
      </div>
      <div className={classes.containerItems}>
        <NavLink
          IconBold={HomeIcon}
          IconOutlined={HomeOutlinedIcon}
          router={router}
          navLinkName="home"
        />
        <NavLink
          IconBold={SettingsIcon}
          IconOutlined={SettingsOutlinedIcon}
          router={router}
          navLinkName="settings"
        />
        <NavLink
          IconBold={HomeIcon}
          IconOutlined={HomeOutlinedIcon}
          router={router}
          navLinkName="homed"
        />
        <NavLink
          IconBold={SettingsIcon}
          IconOutlined={SettingsOutlinedIcon}
          router={router}
          navLinkName="settings"
        />
      </div>

      <div className={classes.signOutContainer}>
        <ExitToAppIcon className={classes.iconLogout} />
      </div>
    </div>
  );
};

export default NavigationBar;
