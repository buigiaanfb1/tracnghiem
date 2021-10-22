import React from 'react';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxesGroup = ({ classNames }) => {
  const classes = classNames;
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.containerCheckbox}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Typography className={classes.title}>Chọn đáp án đúng</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={gilad}
                onChange={handleChange}
                name="gilad"
                size="small"
              />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jason}
                onChange={handleChange}
                name="jason"
                size="small"
              />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
                size="small"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Hãy cẩn thận</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CheckboxesGroup;
