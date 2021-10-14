import React from 'react';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

// FortAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faUserCog,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const ProgressProfile = ({ onToggle }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.containerHeader}>
        <div className={classes.containerIconHeader} onClick={onToggle}>
          <CloseIcon className={classes.icon} />
        </div>
        <div className={classes.containerIconHeader}>
          <NotificationsOutlinedIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.containerUser}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5dde4e453e9c044c1ab3b983/1612559902023-K5GXBTKZF7JEWSVPR8BJ/avatar-gradient.png"
          className={classes.avatar}
        />
        <Typography className={classes.username}>John Doe</Typography>
      </div>
      <div className={classes.containerTotalJoined}>
        <div
          className={`${classes.containerJoinedTotal} ${classes.containerJoinedYellow}`}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className={classes.iconTotalYellow}
          />
          <Typography
            className={`${classes.description} ${classes.descriptionYellow}`}
          >
            Courses Completed
          </Typography>
          <Typography className={`${classes.number} ${classes.numberYellow}`}>
            15
          </Typography>
        </div>
        <div
          className={`${classes.containerJoinedTotal} ${classes.containerTotalGreen}`}
        >
          <FontAwesomeIcon
            icon={faUserCog}
            className={classes.iconTotalGreen}
          />
          <Typography
            className={`${classes.description} ${classes.descriptionGreen}`}
          >
            Knowledge Level
          </Typography>
          <Typography className={`${classes.number} ${classes.numberGreen}`}>
            21
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProgressProfile;
