import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import categoriesCheckboxes from '../../common/categoriesCheckboxes.json';

const CheckboxesGroup = ({ classNames }) => {
  const classes = classNames;
  const [state, setState] = useState(categoriesCheckboxes);

  useEffect(() => {}, []);

  const handleChange = (event) => {};

  const handleRenderChoice = () => {
    return state.map((category) => {
      return (
        <FormControlLabel
          key={category.id}
          control={
            <Checkbox
              checked={category.selected}
              onChange={handleChange}
              name={category.id}
              size="small"
            />
          }
          label={category.label}
        />
      );
    });
  };

  return (
    <div className={classes.containerCheckbox}>
      <Typography className={classes.titleCate}>Danh mục</Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>{handleRenderChoice()}</FormGroup>
      </FormControl>
    </div>
  );
};

export default CheckboxesGroup;
