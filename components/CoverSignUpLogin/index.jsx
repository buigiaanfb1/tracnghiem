import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/SignUpLoginStyles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Link from 'next/link';

const CoverSignUpLogin = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bigImg}>
        <div className={classes.containerIntro}>
          <Typography className={classes.introTitle}>
            Easily scale with serverless instances
          </Typography>
          <Typography className={classes.slogan}>
            Effortlessly scale to meet app demand with minimal configuration.
            Just pay for the operations you run.
          </Typography>
          <Link href="/landing" passHref>
            <Typography className={classes.ourStoryText}>
              Our story
              <ArrowRightAltIcon className={classes.icon} />
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CoverSignUpLogin;
