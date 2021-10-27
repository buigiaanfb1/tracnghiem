import React from 'react';
import { useStyles } from '../../styles/SignUpLoginStyles';
import CoverSignUpLogin from '../../components/CoverSignUpLogin';
import ForgotPassword from '../../components/ForgotPassword';

const ForgotPasswordWrapper = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <ForgotPassword />
      </div>
      <div className={classes.containerBigImg}>
        <CoverSignUpLogin />
      </div>
    </div>
  );
};

export default ForgotPasswordWrapper;
