import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const IntroduceCourse = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <div className={classes.bigImg}>
        <div className={classes.container}>
          <div className={classes.leftHand}>
            <Typography variant="h1" className={classes.title}>
              Node.js, Express, MongoDB & More: The Complete Bootcamp 2021
            </Typography>
            <Typography>
              Master Node by building a real-world RESTful API and web app (with
              authentication, Node.js security, payments & more)
            </Typography>
            <div className={classes.wrapperCreatedVsUpdated}>
              <Typography className={classes.created}>
                Created by <span>John Doe</span>
              </Typography>
              <Typography className={classes.updated}>
                Last updated 7/2021
              </Typography>
            </div>
          </div>
          <div className={classes.rightHand}>
            <div className={classes.containerModalCourse}>
              <img
                src="https://img-c.udemycdn.com/course/480x270/1026604_790b_2.jpg"
                className={classes.cover}
              />
              <div className={classes.containerDescription}>
                <Button className={classes.containerButton}>
                  <Typography>Tham gia ngay</Typography>
                </Button>
                <Typography className={classes.include}>
                  This course include:
                </Typography>
                <Typography className={classes.includeItem}>
                  28 hours on-demand video
                </Typography>
                <Typography className={classes.includeItem}>
                  2 articles
                </Typography>
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
        </div>
      </div>
      <div className={classes.tableOfContent}>
        <Typography className={classes.titleTableContent}>
          Danh sách bài thi
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been thes standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </div>
    </div>
  );
};

export default IntroduceCourse;
