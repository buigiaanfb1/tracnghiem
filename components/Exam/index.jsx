import React, { useEffect } from 'react';
import { useStyles } from './styles';
import QuestionList from '../QuestionList';
import QuestionAnswer from '../QuestionAnswer';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Exam = () => {
  const classes = useStyles();
  const router = useRouter();
  useEffect(() => {
    // Always do navigations after the first render
    if (router.query.question == null) {
      router.push(
        {
          query: {
            question: 1,
            attemptId: router.query.id,
            id: router.query.id,
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, []);
  const { questionList } = useSelector((state) => state.questionList);
  if (questionList && router.query.question) {
    return (
      <div className={`${classes.root} ${classes.bodyScroll}`}>
        <div className={classes.containerQuestionList}>
          <QuestionList questionList={questionList} />
        </div>
        <div className={classes.containerQuestionAnswer}>
          <QuestionAnswer questionList={questionList} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Exam;
