import React from 'react';
import { useStyles } from '../../styles/SignUpLoginStyles';
import CoverSignUpLogin from '../../components/CoverSignUpLogin';
import ResetPassword from '../../components/ResetPassword';

const ResetPasswordWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <ResetPassword />
      </div>
      <div className={classes.containerBigImg}>
        <CoverSignUpLogin />
      </div>
    </div>
  );
};

export default ResetPasswordWrapper;
