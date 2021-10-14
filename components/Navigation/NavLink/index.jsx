import React from 'react';
import Link from 'next/link';
import { useStyles } from '../styles';

const NavLink = ({ router, IconBold, IconOutlined, navLinkName = '/' }) => {
  const classes = useStyles();

  return router.pathname == '/' + navLinkName ? (
    <Link href={'/' + navLinkName}>
      <div className={classes.itemActive}>
        <IconBold className={classes.icon} />
      </div>
    </Link>
  ) : (
    <Link href={'/' + navLinkName}>
      <div className={classes.item}>
        <IconOutlined className={classes.icon} />
      </div>
    </Link>
  );
};

export default NavLink;
