import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Input from '../Input';
import { useStyles } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schemaForgot = yup
  .object({
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Your password must greater than 6 characters')
      .max(20, 'Your password must less than 20 characters'),
    passwordConfirmation: yup
      .string()
      .required('Repeat password is required')
      .test('passwords-match', 'Passwords does not match', function (value) {
        return this.parent.password === value;
      }),
  })
  .required();

const ResetPassword = () => {
  const classes = useStyles();
  const router = useRouter();
  const [state, setState] = useState({
    success: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForgot),
  });

  const onSubmit = async (dataPassword) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { status, data } = await axios.put(
        `/api/password/reset/${router.query.token}`,
        dataPassword,
        config
      );
      if (status === 200) {
        setState({
          success: true,
        });
        router.push('/login');
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Forgot</Typography>
      {!state.success ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            classNames={classes}
            placeholder="New password"
            label="New password"
            name="password"
            type="password"
            register={register}
            required
            errors={errors}
          />
          <Input
            classNames={classes}
            placeholder="Confirm your password"
            label="Confirm your password"
            name="passwordConfirmation"
            type="password"
            register={register}
            required
            errors={errors}
          />
          <Button className={classes.buttonLogin} type="submit">
            <Typography>Continue</Typography>
          </Button>
        </form>
      ) : (
        <>
          <div className={classes.successContainer}>
            <Typography className={classes.titleSuccess}>
              Successfully
            </Typography>
            <Typography>We will redirect you to login page</Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
