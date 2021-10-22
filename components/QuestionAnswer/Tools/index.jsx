import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from '../styles';
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

  const handleChangeShallowRoute = () => {
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
  return (
    <div className={classes.containerTools}>
      <Button>Trở lại câu trước</Button>
      <Button>Lưu và nộp bài</Button>
      <Button onClick={() => handleChangeShallowRoute()}>Câu tiếp theo</Button>
    </div>
  );
};

export default Tools;
