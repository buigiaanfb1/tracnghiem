import React from 'react';
import { useStyles } from '../../styles/SignUpLoginStyles';
import { signUpInputs } from '../../common/InputForm';
import Form from '../../components/Form/FormLoginSignUp';
import CoverSignUpLogin from '../../components/CoverSignUpLogin';

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <Form type="signup" title="Sign Up" inputs={signUpInputs} />
      </div>
      <div className={classes.containerBigImg}>
        <CoverSignUpLogin />
      </div>
    </div>
  );
};

export default SignUp;
