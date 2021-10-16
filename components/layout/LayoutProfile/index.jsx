import React from 'react';
import { useStyles } from './styles';
import { profileTabs } from '../../../common/Link';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@material-ui/core';
import cls from 'classnames';

const LayoutProfile = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const handleRenderTabs = (profileTabs) => {
    return (
      <>
        <div className={classes.titleContainer}>
          <Typography className={classes.title}>
            {profileTabs.tabsProfile.name}
          </Typography>
        </div>
        {profileTabs.tabsProfile.tabs.map((tab, index) => (
          <Link href={tab.uri} passHref key={tab.keyName}>
            <div
              className={cls(classes.item, {
                [classes.itemSelected]: router.pathname === tab.fullUri,
              })}
            >
              <Typography>{tab.label}</Typography>
            </div>
          </Link>
        ))}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div className={classes.containerTabs}>
              {handleRenderTabs(profileTabs)}
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.containerContent}>{children}</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LayoutProfile;
