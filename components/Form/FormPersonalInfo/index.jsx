import { Button, Typography } from '@material-ui/core';
import React from 'react';
import Input from '../../Input';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    fullName: yup.string().required('Full name is required'),
    location: yup.string(),
    facebook: yup.string(),
    twitter: yup.string(),
  })
  .required();

const FormPersonalInfo = ({ classNames, inputs }) => {
  const classes = classNames;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRenderInputs = (register, errors) => {
    return inputs.map((input) => {
      return (
        <Grid item xs={6} key={input.index}>
          <Input
            classNames={classes}
            placeholder={input.placeholder}
            label={input.label}
            name={input.name}
            type={input.type}
            register={register}
            required
            errors={errors}
          />
        </Grid>
      );
    });
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>{handleRenderInputs(register, errors)}</Grid>
        <div className={classes.containerButton}>
          <Button className={classes.buttonSave} type="submit">
            <Typography>Save</Typography>
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormPersonalInfo;
