import { Typography } from '@material-ui/core';
import React from 'react';

const Input = ({
  classNames,
  placeholder = 'mail@website.com',
  label = 'Email',
  type = 'text',
}) => {
  return (
    <div className={classNames}>
      <Typography>{label}</Typography>
      <input placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
