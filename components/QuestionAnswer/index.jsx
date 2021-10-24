import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import Tools from './Tools';
import RadioButtonsGroup from '../RadioButtonsGroup';
import CheckboxesGroup from '../CheckboxesGroup';
import { useRouter } from 'next/router';
import { CHOSEN_QUESTION } from '../../redux/constants/questionConstants';
import { useDispatch } from 'react-redux';

const QuestionAnswer = ({ questionList }) => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const questionIndex = router.query.question;
  let question = questionList[questionIndex - 1];
  console.log(question);

  const handleChosenQuestion = (questionId, answerId) => {
    console.log(questionId, answerId);
    dispatch({
      type: CHOSEN_QUESTION,
      payload: { questionId, answerId },
    });
  };

  if (question) {
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
            <RadioButtonsGroup
              classNames={classes}
              question={question}
              handleChosenQuestion={handleChosenQuestion}
            />
            {/* <CheckboxesGroup classNames={classes} />
            <RadioButtonsGroup classNames={classes} />
            <CheckboxesGroup classNames={classes} /> */}
          </div>
        </div>
        <Tools />
      </>
    );
  } else {
    return <div></div>;
  }
};

export default QuestionAnswer;
