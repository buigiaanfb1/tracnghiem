import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import lottie from 'lottie-web/build/player/lottie_light';
import landingLottie from '../../assets/lotties/landing.json';
import React, { useEffect } from 'react';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#react-logo'),
      animationData: landingLottie,
      renderer: 'svg', // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  }, []);
  return (
    <div className={classes.root}>
      <header className={classes.container}>
        <div className={classes.containerLogo}>
          <Typography className={classes.logo}>Easy10</Typography>
        </div>
        <div className={classes.containerNavigation}>
          <div className={classes.item}>
            <Typography className={classes.content}>About</Typography>
          </div>
          <div className={classes.item}>
            <Typography className={classes.content}>Start</Typography>
          </div>
          <div className={classes.item}>
            <Typography className={classes.content}>Academy</Typography>
          </div>
          <div className={classes.item}>
            <Typography className={classes.content}>Login</Typography>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <Grid container>
          <Grid item xs={6}>
            <Paper className={classes.paperPadding}>
              <Typography className={classes.title}>
                Review you brain, <br />
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography className={classes.smallDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum
                dolor sit amet consectetur adipisicing. dolor sit amet
                consectetur adipisicing.
              </Typography>
              <div className={classes.containerButton}>
                <Button variant="contained" className={classes.button}>
                  Trắc nghiệm ngay!
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div id="react-logo" style={{ height: 525 }} />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Header;
