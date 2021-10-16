import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';

const NavLink = ({
  router,
  IconBold,
  IconOutlined,
  navLinkName,
  abstractName,
  classNames,
  content,
}) => {
  return router.asPath === navLinkName ||
    (abstractName && router.pathname.includes(abstractName)) ? (
    <Link href={navLinkName} passHref>
      <div className={classNames.itemActive}>
        <IconBold className={classNames.icon} />
        <Typography className={classNames.titleLink}>{content}</Typography>
      </div>
    </Link>
  ) : (
    <Link href={'/' + navLinkName} passHref>
      <div className={classNames.item}>
        <IconOutlined className={classNames.icon} />
        <Typography className={classNames.titleLink}>{content}</Typography>
      </div>
    </Link>
  );
};

export default NavLink;
