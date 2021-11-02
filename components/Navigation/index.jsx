import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavLink from './../NavLink';
import { mainNavigate } from '../../common/Link';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();
  const [session, loading] = useSession();

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
      <>
        {!session && (
          <Link href="/login" passHref>
            <Button className={classes.buttonSignIn}>Đăng nhập</Button>
          </Link>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div className={classes.signOutContainer} onClick={() => signOut()}>
              <ExitToAppIcon className={classes.iconLogout} />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default NavigationBar;
