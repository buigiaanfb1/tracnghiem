import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from '../styles';
import { useRouter } from 'next/router';

const QuestionList = ({ questionList }) => {
  const classes = useStyles();
  const router = useRouter();

  const handleChangeQuestion = (questionId) => {
    router.push(
      {
        query: {
          question: questionId,
          attemptId: router.query.attemptId,
          id: router.query.id,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return questionList.map((question, index) => {
    return (
      <div
        className={classes.containerQuestion}
        key={question.id}
        onClick={() => handleChangeQuestion(index + 1)}
      >
        <div
          className={`${
            router.query.question == index + 1
              ? classes.questionActive
              : classes.question
          } ${question.selected && classes.questionSelected}`}
        >
          <Typography style={{ userSelect: 'none' }}>{index + 1}</Typography>
        </div>
      </div>
    );
  });
};

export default QuestionList;
