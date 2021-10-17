import { Typography } from '@material-ui/core';
import React from 'react';

const Input = ({
  classNames,
  placeholder = 'mail@website.com',
  label = 'Email',
  type = 'text',
  name,
  register = null,
  required = null,
  errors = null,
}) => {
  console.log(errors);
  return (
    <div className={classNames.input}>
      <Typography>{label}</Typography>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required })}
      />
      <Typography className={classNames.error}>
        {errors[name]?.message}
      </Typography>
    </div>
  );
};

export default Input;
