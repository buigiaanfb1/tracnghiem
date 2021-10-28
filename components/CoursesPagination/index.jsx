import React from 'react';
import Course from './Course';
import { useStyles } from './styles';
import Pagination from 'react-js-pagination';
import { useRouter } from 'next/router';

const CoursesPagination = () => {
  const classes = useStyles();
  const router = useRouter();

  const handlePagination = (pageNumber) => {
    router.push(`?page=${pageNumber}`);
  };

  let { page } = router.query;
  page = Number(page);

  return (
    <div>
      {Array(2)
        .fill(10)
        .map((course, index) => {
          return <Course key={index} />;
        })}
      {page && (
        <Pagination
          activePage={page}
          itemsCountPerPage={4}
          totalItemsCount={12}
          onChange={handlePagination}
          nextPageText={'⟩'}
          prevPageText={'⟨'}
          firstPageText={'«'}
          lastPageText={'»'}
          innerClass={classes.containerPagination}
          itemClass={classes.li}
          linkClass={classes.a}
          activeClass={classes.activeLi}
          disabledClass={classes.disablePrevNext}
        />
      )}
    </div>
  );
};

export default CoursesPagination;
