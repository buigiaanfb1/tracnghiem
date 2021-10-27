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
    email: yup
      .string()
      .email('Email is wrong format')
      .required('Email is required'),
  })
  .required();

const ForgotPassword = () => {
  const classes = useStyles();
  const router = useRouter();
  const [state, setState] = useState({
    success: false,
    email: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForgot),
  });

  const onSubmit = async (email) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { status, data } = await axios.post(
        '/api/password/forgot',
        email,
        config
      );
      if (status === 200) {
        setState({
          success: true,
          email: email.email,
        });
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
            placeholder="example@company.com"
            label="Your email"
            name="email"
            type="text"
            register={register}
            required
            errors={errors}
          />

          <div className={classes.forgotPassword} onClick={() => router.back()}>
            <ArrowBackIosIcon />
            <Typography className={classes.purpleText}>Go back</Typography>
          </div>

          <Button className={classes.buttonLogin} type="submit">
            <Typography>Continue</Typography>
          </Button>
        </form>
      ) : (
        <>
          <div className={classes.forgotPassword} onClick={() => router.back()}>
            <ArrowBackIosIcon />
            <Typography className={classes.purpleText}>Go back</Typography>
          </div>
          <div className={classes.successContainer}>
            <Typography className={classes.titleSuccess}>
              Check your inbox
            </Typography>
            <Typography>
              We have just send you an email to <b>{state.email}</b> with a link
              to reset you password.
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
