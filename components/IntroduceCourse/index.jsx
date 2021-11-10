import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import CommentSection from '../CommentSection';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const IntroduceCourse = () => {
  const classes = useStyles();
  const router = useRouter();
  const courseDetails = useSelector((state) => state.courseDetails.course);
  const user = useSelector((state) => state.loadedUser.user);
  return (
    <>
      <div className={`${classes.root} ${classes.bodyScroll}`}>
        <div className={classes.bigImg}>
          <div className={classes.container}>
            <div className={classes.leftHand}>
              <Typography variant="h1" className={classes.title}>
                {courseDetails?.name}
              </Typography>
              <Typography>{courseDetails?.description}</Typography>
              <div className={classes.wrapperCreatedVsUpdated}>
                <Typography className={classes.created}>
                  Created by <span>John Doe</span>
                </Typography>
                <Typography className={classes.updated}>
                  Last updated 7/2021
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.containerOfDescription}>
          <Typography className={classes.titleDescription}>
            Description
          </Typography>
          <Typography>{courseDetails?.description}</Typography>
        </div>
        <div className={classes.containerOfComment}>
          {courseDetails && (
            <CommentSection courseId={courseDetails._id} user={user} />
          )}
        </div>
      </div>
      <div className={classes.rightHand}>
        <div className={classes.containerModalCourse}>
          <img src={courseDetails?.thumbnailImage} className={classes.cover} />
          <div className={classes.containerDescription}>
            <Link
              href={{
                pathname: '[id]/exams/[attemptId]',
                query: {
                  id: router.query.id,
                  attemptId: router.query.id,
                },
              }}
              passHref
            >
              <Button className={classes.containerButton}>
                <Typography>Thi ngay</Typography>
              </Button>
            </Link>
            <Typography className={classes.include}>
              This course include:
            </Typography>
            <Typography className={classes.includeItem}>
              28 hours on-demand video
            </Typography>
            <Typography className={classes.includeItem}>2 articles</Typography>
            <Typography className={classes.includeItem}>
              Full lifetime access
            </Typography>
            <Typography className={classes.includeItem}>
              Access on mobile and TV
            </Typography>
            <Typography className={classes.includeItem}>
              Certificate of completion
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroduceCourse;
