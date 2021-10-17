import { Typography } from '@material-ui/core';
import React from 'react';

const BreadcrumbProfile = ({ router, classNames }) => {
  const classes = classNames;
  let path = router.pathname;
  path = path
    .substring(path.indexOf('/', 2) + 1, path.length)
    .split('-')
    .join(' ');
  console.log(path);
  return (
    <div className={classes.containerBreadcrumb}>
      <div className={classes.containerAvatar}>
        <img
          src="https://marketing24h.vn/wp-content/uploads/2020/11/ROI-Content-Marketing.jpg"
          className={classes.avatar}
        />
      </div>
      <div className={classes.content}>
        <Typography className={classes.name}>
          An<span className={classes.slash}>/</span>
          <span className={classes.path}>{path}</span>
        </Typography>
        <Typography className={classes.description}>
          Set up your Dribbble presence and hiring needs
        </Typography>
      </div>
    </div>
  );
};

export default BreadcrumbProfile;
