import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import Tools from './Tools';
import RadioButtonsGroup from '../RadioButtonsGroup';
import CheckboxesGroup from '../CheckboxesGroup';

const QuestionAnswer = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography>Câu số 1</Typography>
        </div>
        <div className={classes.containerQuestion}>
          <Typography className={classes.content}>
            Can you use if-else condition inside render() method of class
            component?
          </Typography>
        </div>
        <div className={classes.containerAnswer}>
          <RadioButtonsGroup classNames={classes} />
          {/* <CheckboxesGroup classNames={classes} />
          <RadioButtonsGroup classNames={classes} />
          <CheckboxesGroup classNames={classes} /> */}
        </div>
      </div>
      <Tools />
    </>
  );
};

export default QuestionAnswer;
