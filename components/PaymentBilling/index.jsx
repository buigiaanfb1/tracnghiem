import React from 'react';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Typography } from '@material-ui/core';

const PaymentBilling = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>Coming Soon!</Typography>
    </div>
  );
};

export default PaymentBilling;
