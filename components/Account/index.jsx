import React from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import FormAccount from '../Form/FormAccount';
import { accountProfile } from '../../common/InputForm';
import withAuth from '../../HOC/withAuth.js';

const Account = () => {
  const classes = useStyles();
  return <FormAccount inputs={accountProfile} classNames={classes} />;
};

export default Account;
