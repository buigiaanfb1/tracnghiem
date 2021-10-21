import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import RadioRead from '../RadioRead';
import Question from './Question';

const QuestionList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h6" className={classes.titleHeader}>
            Danh sách câu hỏi
          </Typography>
          <Typography className={classes.totalQuestion}>35 câu hỏi</Typography>
        </div>
        <div className={classes.containerGuide}>
          <RadioRead
            content="Undone"
            color="#F6F9FC"
            border={true}
            borderColor="#DEE5EF"
          />
          <RadioRead content="Done" color="green" />
          <RadioRead content="Unread" color="yellow" />
        </div>
        <div className={classes.questionList}>
          <Question />
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
