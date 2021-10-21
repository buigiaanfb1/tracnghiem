import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import clx from 'classnames';

const RadioRead = ({
  color = 'white',
  border = true,
  borderColor = 'transparent',
  content = 'Chưa xong',
}) => {
  const classes = useStyles();
  return (
    <div className={classes.containerRadio}>
      <div
        className={clx(classes.radio, {
          [classes.border]: border,
        })}
        style={{ backgroundColor: `${color}`, borderColor: `${borderColor}` }}
      ></div>
      <Typography variant="span" className={classes.content}>
        {content}
      </Typography>
    </div>
  );
};

export default RadioRead;
