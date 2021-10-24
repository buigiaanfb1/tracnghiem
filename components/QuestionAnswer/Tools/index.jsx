import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from '../styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SaveIcon from '@material-ui/icons/Save';
const Tools = () => {
  const classes = useStyles();
  const router = useRouter();

  /** 
    Change route (url ?question=1,2,3,....) without fetch api
    @direction true, false
    True next, false prev
  */
  const handleChangeShallowRoute = (direction) => {
    router.push(
      {
        query: {
          question:
            (parseInt(router.query.question) >= 1
              ? parseInt(router.query.question) + (direction ? 1 || 1 : -1 || 1)
              : 1) == 0
              ? 1
              : parseInt(router.query.question) +
                (direction ? 1 || 1 : -1 || 1),
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

  return (
    <div className={classes.containerTools}>
      <Button
        className={classes.prevButton}
        onClick={() => handleChangeShallowRoute(false)}
      >
        <ArrowBackIosIcon />
        Trở lại câu trước
      </Button>
      <Button className={classes.saveButton}>
        <SaveIcon />
        Lưu và nộp bài
      </Button>
      <Button
        onClick={() => handleChangeShallowRoute(true)}
        className={classes.nextButton}
      >
        Câu tiếp theo
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default Tools;
