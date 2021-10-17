import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import FormPersonalInfo from '../Form/FormPersonalInfo';
import { personalInformation } from '../../common/InputForm';

const PersonalInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.containerUserUI}>
        <div className={classes.containerAvatar}>
          <img
            src="https://marketing24h.vn/wp-content/uploads/2020/11/ROI-Content-Marketing.jpg"
            className={classes.avatar}
          />
        </div>
        <div className={classes.containerEditTool}>
          <Typography className={classes.text}>Change your avatar</Typography>
        </div>
      </div>
      <div className={classes.containerUserInfo}>
        <FormPersonalInfo inputs={personalInformation} classNames={classes} />
      </div>
    </div>
  );
};

export default PersonalInformation;
