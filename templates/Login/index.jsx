import React from 'react';
import { loginInputs } from '../../common/InputForm';
import { useStyles } from '../../styles/SignUpLoginStyles';
import Form from '../../components/Form';
import CoverSignUpLogin from '../../components/CoverSignUpLogin';

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <Form type="login" title="Login" inputs={loginInputs} />
      </div>
      <div className={classes.containerBigImg}>
        <CoverSignUpLogin />
      </div>
    </div>
  );
};

export default Login;
