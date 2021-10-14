import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
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
import { useSelector } from 'react-redux';
import NavLink from './NavLink';

const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();
  // const [theme, setTheme] = useState({
  //   count: 1,
  // });
  // const { theme: themeRedux } = useSelector((state) => state.theme);

  // useEffect(() => {
  //   setTheme({
  //     ...theme,
  //     count: theme.count + 1,
  //   });
  // }, [themeRedux]);

  return (
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
        />
        <NavLink
          IconBold={HistoryIcon}
          IconOutlined={HistoryIcon}
          router={router}
          navLinkName="history"
        />
        <NavLink
          IconBold={AccountCircleIcon}
          IconOutlined={AccountCircleOutlinedIcon}
          router={router}
          navLinkName="user"
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
