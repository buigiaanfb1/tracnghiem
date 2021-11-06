import React from 'react';
import { useStyles } from './styles';
import SearchBar from '../SearchBar';
import ChipTag from '../ChipTag';
import CommentSection from '../CommentSection';
import CheckboxesCategory from '../CheckboxesCategory';
import TabCourses from '../TabCourses';
const CoursesPage = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.bodyScroll}`}>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <SearchBar />
          <div className={classes.containerChip}>
            <ChipTag />
          </div>
          <CheckboxesCategory classNames={classes} />
        </div>
        <div className={classes.containerRight}>
          <TabCourses />
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
