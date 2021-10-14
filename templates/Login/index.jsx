import { Button, Typography } from '@material-ui/core';
import React from 'react';
import Input from '../../components/Input';
import { useStyles } from './styles';

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerLogin}>
        <Typography className={classes.title}>Login</Typography>
        <Typography className={classes.description}>
          See your growth and get consulting support
        </Typography>
        <Button className={classes.buttonGoogle}>
          <img src="/images/googleIconColor.png" />
          <Typography>Sign in with Google</Typography>
        </Button>
        <div className={classes.containerOr}>
          <div className={classes.containerTypo}>
            <Typography>or Sign in with Email</Typography>
          </div>
        </div>
        <Input classNames={classes.input} />
        <Input
          classNames={classes.input}
          placeholder="Min. 8 character"
          label="Password"
          type="password"
        />
        <Button className={classes.buttonLogin}>
          <Typography>Login</Typography>
        </Button>
      </div>
      <div className={classes.containerBigImg}>
        <div className={classes.bigImg} />
      </div>
    </div>
  );
};

export default Login;
