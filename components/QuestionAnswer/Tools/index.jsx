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
  console.log(router.query);

  useEffect(() => {
    // Always do navigations after the first render
    router.push(
      {
        query: {
          question: 1,
          attempId: router.query.attempId,
          id: router.query.id,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }, []);

  const handleChangeNextShallowRoute = () => {
    router.push(
      {
        query: {
          question: parseInt(router.query.question) + 1 || 1,
          attempId: router.query.attempId,
          id: router.query.id,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  const handleChangePrevShallowRoute = () => {
    router.push(
      {
        query: {
          question: parseInt(router.query.question) - 1 || 1,
          attempId: router.query.attempId,
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
        onClick={() => handleChangePrevShallowRoute()}
      >
        <ArrowBackIosIcon />
        Trở lại câu trước
      </Button>
      <Button className={classes.saveButton}>
        <SaveIcon />
        Lưu và nộp bài
      </Button>
      <Button
        onClick={() => handleChangeNextShallowRoute()}
        className={classes.nextButton}
      >
        Câu tiếp theo
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default Tools;
