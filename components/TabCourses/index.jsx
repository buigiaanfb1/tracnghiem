import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import CourseCategory from '../CourseCategory';

const StyledTabs = withStyles({
  root: {
    '& .MuiTab-textColorInherit.Mui-selected': {
      '& .MuiTab-wrapper': {
        color: '#635ee7',
        fontWeight: '700',
      },
    },
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    fontWeight: '700',
    '& > span': {
      color: 'pink',
      maxWidth: 80,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: theme.palette.text.contract,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
    '& .MuiTab-wrapper': {
      color: theme.palette.text.contract,
      fontWeight: '500',
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: '0.5rem 3rem',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Available Courses" {...a11yProps(0)} />
          <StyledTab label="Trending Courses" {...a11yProps(1)} />
          <StyledTab label="Contributing Courses" {...a11yProps(2)} />
          <StyledTab label="My Courses" {...a11yProps(3)} />
        </StyledTabs>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
          <CourseCategory />
          <CourseCategory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CourseCategory />
          <CourseCategory />
          <CourseCategory />
          <CourseCategory />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CourseCategory />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CourseCategory />
          <CourseCategory />
        </TabPanel>
      </div>
    </div>
  );
}
