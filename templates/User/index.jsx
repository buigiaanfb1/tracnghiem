import React from 'react';
import { useStyles } from './styles';
import UserProfile from '../../components/UserProfile';

const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerUserProfile}>
      <UserProfile />
    </div>
  );
};

export default User;
