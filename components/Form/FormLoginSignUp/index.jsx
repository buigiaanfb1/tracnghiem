import { Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import React from 'react';
import Input from '../../Input';
import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CircularProgress from '@material-ui/core/CircularProgress';

const schemaSignUp = yup
  .object({
    email: yup.string().email('Invalid format').required('Email is required'),
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

const schemaLogin = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const Form = ({ type, title, inputs, handleFilledForm }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(type === 'login' ? schemaLogin : schemaSignUp),
  });

  const handleRenderInputs = (register, errors) => {
    return inputs.map((input) => {
      return (
        <Input
          key={input.index}
          classNames={classes}
          placeholder={input.placeholder}
          label={input.label}
          name={input.name}
          type={input.type}
          register={register}
          required
          errors={errors}
        />
      );
    });
  };
  const onSubmit = (data) => {
    handleFilledForm(data);
  };

  return (
    <>
      <Head>
        <title>{title + ' | Easy10'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.description}>
        See your growth and get consulting support
      </Typography>
      <Button className={classes.buttonGoogle}>
        <img src="/images/googleIconColor.png" />
        <Typography>{title} with Google</Typography>
      </Button>
      <div className={classes.containerOr}>
        <div className={classes.containerTypo}>
          <Typography>or {title} with Email</Typography>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {handleRenderInputs(register, errors)}
        <div className={classes.forgotPassword}>
          {type == 'login' && (
            <Link href="/password/forgot" passHref>
              <Typography className={classes.purpleText}>
                Forgot Password?
              </Typography>
            </Link>
          )}
        </div>

        <Button className={classes.buttonLogin} type="submit">
          {/* <CircularProgress size={16} /> */}
          <Typography>{title}</Typography>
        </Button>
      </form>
      <Typography className={classes.blackText}>
        {type == 'signup' ? 'Have an account ?' : 'Not registered yet?'}{' '}
        {type == 'signup' ? (
          <Link href="/login" passHref>
            <span className={classes.purpleText}>Login</span>
          </Link>
        ) : (
          <Link href="/signup" passHref>
            <span className={classes.purpleText}>Create an account</span>
          </Link>
        )}
      </Typography>
    </>
  );
};

export default Form;
