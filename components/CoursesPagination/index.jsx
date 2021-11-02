import React from 'react';
import Course from './Course';
import { useStyles } from './styles';
import Pagination from 'react-js-pagination';
import { useRouter } from 'next/router';

const CoursesPagination = () => {
  const classes = useStyles();
  const router = useRouter();

  const handlePagination = (pageNumber) => {
    router.push(
      {
        query: {
          page: pageNumber,
          type: router.query.type || 'available',
        },
      },
      undefined
    );
  };

  let { page } = router.query;
  page = Number(page) || 1;

  return (
    <div>
      {Array(Math.floor(Math.random() * 4) + 1)
        .fill(10)
        .map((course, index) => {
          return <Course key={index} />;
        })}
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
    </div>
  );
};

export default CoursesPagination;
