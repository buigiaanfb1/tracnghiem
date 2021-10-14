import { Button, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import lottie from 'lottie-web/build/player/lottie_light';
import landingLottie from '../../assets/lotties/landing.json';
import React, { useEffect } from 'react';
import { useStyles } from './styles';

// FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCalendarCheck,
} from '@fortawesome/free-regular-svg-icons';
import {
  faPhoneAlt,
  faAward,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
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
        <div style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Paper className={classes.paperPadding}>
                  <Typography className={classes.title}>
                    Review you brain, <br />
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography className={classes.smallDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur adipisicing. dolor sit amet
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
                  <div
                    id="react-logo"
                    style={{ height: 525 }}
                    className={classes.lottie}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} className={classes.containerIntroduce}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div
                    className={`${classes.containerIcon} ${classes.containerIconYellow}`}
                  >
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className={`${classes.icon} ${classes.iconYellow}`}
                    />
                  </div>
                  <Typography className={classes.titleIntroduce}>
                    Easy to migrate
                  </Typography>
                  <Typography className={classes.smallContentIntroduce}>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur adipisicing. dolor sit amet
                    consectetur adipisicing.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div
                    className={`${classes.containerIcon} ${classes.containerIconGreen}`}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className={`${classes.icon} ${classes.iconGreen}`}
                    />
                  </div>
                  <Typography className={classes.titleIntroduce}>
                    Easy to migrate
                  </Typography>
                  <Typography className={classes.smallContentIntroduce}>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur adipisicing. dolor sit amet
                    consectetur adipisicing.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div
                    className={`${classes.containerIcon} ${classes.containerIconPurple}`}
                  >
                    <FontAwesomeIcon
                      icon={faAward}
                      className={`${classes.icon} ${classes.iconPurple}`}
                    />
                  </div>
                  <Typography className={classes.titleIntroduce}>
                    Easy to migrate
                  </Typography>
                  <Typography className={classes.smallContentIntroduce}>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur adipisicing. dolor sit amet
                    consectetur adipisicing.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={12} className={classes.containerIntroduce}>
              <Grid item xs={6}>
                <Paper className={classes.paperBorn}>
                  <Typography className={classes.titleBorn}>
                    Easy to migrate
                  </Typography>
                  <Typography className={classes.smallContentBorn}>
                    Lorem ipsum dolor sit amet consectetur adipisicing. Lorem
                    ipsum dolor sit amet consectetur adipisicing. dolor sit amet
                    consectetur adipisicing.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paperBorn}>
                  <div className={classes.parentBorn}>
                    <img
                      src="https://images.ctfassets.net/p0qf7j048i0q/25Vt64xS2NHD0FaUpS5T9V/6d827ce80aa3b71e602c15909f3576f7/G1272598521.png?w=1000&h=750&fit=fill&fm=webp"
                      className={classes.imgBorn}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
      <footer className={classes.footer}>
        <Grid container item xs={12} className={classes.containerFooter}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.titleFooter}>Logo</Typography>
              <div className={classes.containerItemsFooter}>
                <div className={classes.itemFooter}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={classes.itemFooterIcon}
                  />
                  <Typography className={classes.itemFooterContent}>
                    admin@gmail.com
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className={classes.itemFooterIcon}
                  />
                  <Typography className={classes.itemFooterContent}>
                    09283648723
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.titleFooter}>Responses</Typography>
              <div className={classes.containerItemsFooter}>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    How it works
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Guarantee
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Security
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Pricing
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.titleFooter}>About</Typography>
              <div className={classes.containerItemsFooter}>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Policy
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Job
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Testimonils
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Blogs
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography className={classes.titleFooter}>
                Subscribe Us
              </Typography>
              <div className={classes.containerItemsFooter}>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Policy
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Job
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Testimonils
                  </Typography>
                </div>
                <div className={classes.itemFooter}>
                  <Typography className={classes.itemFooterContent}>
                    Blogs
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default Landing;
