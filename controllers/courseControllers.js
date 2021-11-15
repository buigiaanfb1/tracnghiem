import Course from '../models/course';
import catchAsyncError from '../middlewares/catchAsyncError';
import APIFeatures from '../utils/apiFeatures';
import ErrorHandler from '../utils/errorHandler';
import slugify from 'slugify';

const newCourse = catchAsyncError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
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
  let trendingCourses = await Course.find().sort({ totalViews: -1 }).limit(50);
  res.status(200).json({
    success: true,
    trendingCourses,
  });
});

const coursesBySlug = catchAsyncError(async (req, res, next) => {
  let slugId = req.query.id;
  if (slugId) {
    let course = await Course.findOne({ slugId: slugId });
    if (course) {
      res.status(200).json({
        success: true,
        course,
      });
    } else {
      return next(new ErrorHandler('Invalid ID', 400));
    }
  } else {
    return next(new ErrorHandler('ID is empty', 400));
  }
});

export { newCourse, allCourses, trendingCourses, coursesBySlug };
