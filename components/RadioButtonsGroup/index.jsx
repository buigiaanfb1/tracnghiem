import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

const RadioButtonsGroup = ({ classNames }) => {
  const classes = classNames;
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography className={classes.title}>Chọn đáp án đúng</Typography>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio size="small" />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio size="small" />}
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={<Radio size="small" />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
