import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxesGroup = ({ classNames, question, handleChosenQuestion }) => {
  const classes = classNames;
  const [state, setState] = useState([]);
  console.log(state);
  useEffect(() => {
    mergedSelectedChoices();
  }, [question?.selected]);

  const mergedSelectedChoices = () => {
    let questionChoices = question.choices;
    // get tren store redux selected choices
    let selectedChoices = question.selected || [];
    // kiem tra xem co includes tren store ko
    questionChoices.forEach((choice, index, questionChoices) => {
      if (selectedChoices.includes(choice.id)) {
        questionChoices[index].selected = true;
      } else {
        questionChoices[index].selected = false;
      }
    });
    setState(questionChoices);
  };

  const handleChange = (event) => {
    let copyState = [...state].map((choice) => {
      return choice.id == event.target.name
        ? { ...choice, selected: event.target.checked }
        : choice;
    });
    setState(copyState);
    // Filter ra object co selected == true;
    let selectedObject = copyState.filter((choice) => {
      return choice.selected;
    });
    // filter xong thi lay ra id;
    let selected = selectedObject.map((choice) => {
      return choice.id;
    });
    //dispatch redux
    handleChosenQuestion(question.id, selected);
  };

  const handleRenderChoice = () => {
    return state.map((choice) => {
      return (
        <FormControlLabel
          key={choice.id}
          control={
            <Checkbox
              checked={choice.selected}
              onChange={handleChange}
              name={choice.id}
              size="small"
            />
          }
          label={choice.label}
        />
      );
    });
  };

  return (
    <div className={classes.containerCheckbox}>
      <FormControl component="fieldset" className={classes.formControl}>
        <Typography className={classes.title}>Chọn đáp án đúng</Typography>
        <FormGroup>{handleRenderChoice()}</FormGroup>
        <FormHelperText>Hãy cẩn thận</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CheckboxesGroup;
