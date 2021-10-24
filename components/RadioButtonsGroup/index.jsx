import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

const RadioButtonsGroup = ({ classNames, question, handleChosenQuestion }) => {
  const classes = classNames;
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(question.selected || '');
  }, [question?.selected]);

  const handleChange = (event) => {
    setValue(event.target.value);
    handleChosenQuestion(question.id, parseInt(event.target.value));
  };

  const handleChoices = () => {
    if (question) {
      return question.choices.map((choice) => {
        return (
          <FormControlLabel
            value={choice.id.toString()}
            control={<Radio size="small" style={{ transition: 'none' }} />}
            label={choice.label}
            key={choice.id}
          />
        );
      });
    }
  };

  return (
    <FormControl component="fieldset">
      <Typography className={classes.title}>Chọn đáp án đúng</Typography>
      <RadioGroup
        aria-label="single_choice"
        name="single_choice"
        value={value}
        onChange={handleChange}
      >
        {handleChoices()}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
