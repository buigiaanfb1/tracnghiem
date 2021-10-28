import Course from '../models/course';
import catchAsyncError from '../middlewares/catchAsyncError';

const newCourse = catchAsyncError(async (req, res, next) => {
  const course = await Course.create(req.body);
  return res.status(200).json({
    course,
    success: true,
  });
});

export { newCourse };
