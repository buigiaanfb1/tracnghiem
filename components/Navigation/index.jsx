import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavLink from './../NavLink';
import { mainNavigate } from '../../common/Link';
import Link from 'next/link';

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
        <Link href="/" passHref>
          <Typography className={classes.logo}>Logo</Typography>
        </Link>
      </div>
      <div className={classes.containerItems}>{handleRenderNavigate()}</div>
      <div className={classes.signOutContainer}>
        <ExitToAppIcon className={classes.iconLogout} />
      </div>
    </div>
  );
};

export default NavigationBar;
