import React from 'react';
import SearchBar from '../SearchBar';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import Courses from '../Courses';
import HistoryTable from '../HistoryTable';

const History = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <Typography variant="h5">My History</Typography>
      <HistoryTable />
    </div>
  );
};

export default History;
