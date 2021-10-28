import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import { useRouter } from 'next/dist/client/router';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';

const Course = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleChangeRoute = () => {
    router.push({ pathname: '/course/[id]', query: { id: '1' } }, undefined);
  };
  return (
    <div className={classes.container} onClick={handleChangeRoute}>
      <div className={classes.containerImage}>
        <img src="https://wiki.tino.org/wp-content/uploads/2020/10/react-native-final-file.jpg" />
      </div>
      <div className={classes.containerDescription}>
        <div className={classes.containerLevel}>
          <Typography className={classes.level}>Cơ Bản</Typography>
        </div>
        <div className={classes.containerTitle}>
          <Typography variant="h6" className={classes.title}>
            React.js Essentitals
          </Typography>
        </div>
        <div className={classes.containerStatistics}>
          <div className={classes.item}>
            <PeopleAltOutlinedIcon />
            <Typography>123</Typography>
          </div>
          <div className={classes.item}>
            <HelpOutlineOutlinedIcon />
            <Typography>40</Typography>
          </div>
          <div className={classes.item}>
            <VisibilityOutlinedIcon />
            <Typography>3.3k</Typography>
          </div>
          <div className={classes.item}>
            <DateRangeOutlinedIcon />
            <Typography>26/10/2021</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
