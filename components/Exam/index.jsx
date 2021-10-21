import React from 'react';
import { useStyles } from './styles';
import QuestionList from '../QuestionList';
import QuestionAnswer from '../QuestionAnswer';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <div className={classes.containerQuestionList}>
        <QuestionList />
      </div>
      <div className={classes.containerQuestionAnswer}>
        <QuestionAnswer />
      </div>
    </div>
  );
};

export default Dashboard;
