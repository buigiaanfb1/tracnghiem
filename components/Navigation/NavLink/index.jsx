import React from 'react';
import { useStyles } from '../styles';

const NavLink = ({ router, IconBold, IconOutlined, navLinkName = '/' }) => {
  const classes = useStyles();
  return router.pathname == '/' + navLinkName ? (
    <div className={classes.itemActive}>
      <IconBold className={classes.icon} />
    </div>
  ) : (
    <div className={classes.item}>
      <IconOutlined className={classes.icon} />
    </div>
  );
};

export default NavLink;
