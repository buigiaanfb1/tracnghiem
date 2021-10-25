import { Avatar, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiChip-root': {
      margin: '0.25rem',
      background: 'rgba(20, 0, 255, 0.2)',
      color: theme.palette.text.contract,
    },
  },
}));

const ChipTag = ({ chips }) => {
  const classes = useStyles();
  const handleRenderChip = () => {
    return Array(10)
      .fill(10)
      .map((chip, index) => {
        return (
          <Chip
            className={classes.root}
            key={index}
            avatar={
              <Avatar src="https://topdev.vn/blog/wp-content/uploads/2017/10/react2.png" />
            }
            label="react"
            size="small"
          />
        );
      });
  };
  return handleRenderChip();
};

export default ChipTag;
