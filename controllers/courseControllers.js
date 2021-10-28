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
  const apiFeatures = new APIFeatures(Course.find(), req.query);

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

export { newCourse, allCourses };
