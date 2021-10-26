import React, { useEffect } from 'react';
import { useStyles } from '../../styles/SignUpLoginStyles';
import { signUpInputs } from '../../common/InputForm';
import Form from '../../components/Form/FormLoginSignUp';
import CoverSignUpLogin from '../../components/CoverSignUpLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { registerUser, clearErrors } from '../../redux/actions/userActions';

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const { success, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      router.push('/login');
    }
    if (error) {
      // toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, success, error]);

  const handleFilledForm = (user) => {
    dispatch(registerUser({ ...user, name: 'Gia An' }));
  };
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <Form
          type="signup"
          title="Sign Up"
          inputs={signUpInputs}
          handleFilledForm={handleFilledForm}
        />
      </div>
      <div className={classes.containerBigImg}>
        <CoverSignUpLogin />
      </div>
    </div>
  );
};

export default SignUp;
