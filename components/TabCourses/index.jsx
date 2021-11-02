import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { tabs } from '../../common/Tabs';
import { useRouter } from 'next/router';
import CoursesPagination from '../CoursesPagination';

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
  const router = useRouter();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    let type = router.query.type || 'available';
    if (type) {
      setValue(type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router]);

  const handleChange = (e, newValue) => {
    router.push(
      {
        query: {
          page: 1,
          type: newValue,
        },
      },
      undefined
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="category courses"
        >
          {tabs.map((tab) => {
            return (
              <StyledTab
                value={tab.name}
                label={tab.label}
                {...a11yProps(tab.id)}
                key={tab.id}
              />
            );
          })}
        </StyledTabs>
        <Typography className={classes.padding} />
        {tabs.map((tab, index) => {
          return (
            <TabPanel value={value} index={tab.name} key={tab.id}>
              <CoursesPagination />
            </TabPanel>
          );
        })}
        {/* <TabPanel value={value} index={0}>
          <CoursesPagination />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CoursesPagination />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CoursesPagination />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CoursesPagination />
        </TabPanel> */}
      </div>
    </div>
  );
}
