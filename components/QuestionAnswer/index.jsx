import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import Tools from './Tools';
import RadioButtonsGroup from '../RadioButtonsGroup';
import CheckboxesGroup from '../CheckboxesGroup';
import { useRouter } from 'next/router';
import {
  CHOSEN_QUESTION_CHECKBOXES,
  CHOSEN_QUESTION_RADIO,
} from '../../redux/constants/questionConstants';
import { useDispatch } from 'react-redux';

const QuestionAnswer = ({ questionList }) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const questionIndex = router.query.question;
  let question = questionList[questionIndex - 1];

  const handleChosenQuestion = (questionId, answerId) => {
    if (answerId?.length) {
      dispatch({
        type: CHOSEN_QUESTION_CHECKBOXES,
        payload: { questionId, answerId },
      });
    } else {
      dispatch({
        type: CHOSEN_QUESTION_RADIO,
        payload: { questionId, answerId },
      });
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography>Câu số {questionIndex}</Typography>
        </div>
        <div className={classes.containerQuestion}>
          <Typography className={classes.content}>
            {question?.question}
          </Typography>
        </div>
        <div className={classes.containerAnswer}>
          {question.type === 'single_choice' ? (
            <RadioButtonsGroup
              classNames={classes}
              question={question}
              handleChosenQuestion={handleChosenQuestion}
            />
          ) : (
            <CheckboxesGroup
              classNames={classes}
              question={question}
              handleChosenQuestion={handleChosenQuestion}
            />
          )}
        </div>
        <Typography
          className={classes.removeAnswer}
          onClick={() => handleChosenQuestion(question.id, null)}
        >
          Xoá đáp án
        </Typography>
      </div>
      <Tools />
    </>
  );
};

export default QuestionAnswer;
