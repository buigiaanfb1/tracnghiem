import Course from '../models/course';
import catchAsyncError from '../middlewares/catchAsyncError';
import APIFeatures from '../utils/apiFeatures';

const newCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.create(req.body);
  return res.status(200).json({
    course,
    success: true,
  });
});

const allCourses = catchAsyncError(async (req, res, next) => {
  const resPerPage = 10;
  const courseCount = await Course.countDocuments();
  const apiFeatures = new APIFeatures(Course.find(), req.query)
    .search()
    .filter();

  let courses = await apiFeatures.query;
  let filteredCoursesCount = courses.length;

  apiFeatures.pagination(resPerPage);
  courses = await apiFeatures.query;

  res.status(200).json({
    success: true,
    courseCount,
    resPerPage,
    filteredCoursesCount,
    courses,
  });
});

const trendingCourses = catchAsyncError(async (req, res, next) => {
  let trendingCourses = await Course.find().sort({ totalViews: -1 }).limit(10);
  res.status(200).json({
    success: true,
    trendingCourses,
  });
});

export { newCourse, allCourses, trendingCourses };
