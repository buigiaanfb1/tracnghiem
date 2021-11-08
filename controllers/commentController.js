import Comment from '../models/comment';
import catchAsyncError from '../middlewares/catchAsyncError';
import ErrorHandler from '../utils/errorHandler';
import APIFeatures from '../utils/apiFeatures';

const newComment = catchAsyncError(async (req, res, next) => {
  const comment = await Comment.create(req.body);
  return res.status(200).json({
    comment,
    success: true,
  });
});

const allComments = catchAsyncError(async (req, res, next) => {
  const comments = await Comment.find({ courseId: req.query.id });
  if (comments.length === 0) {
    return next(new ErrorHandler('No comments was found with this ID', 400));
  }

  return res.status(200).json({
    success: true,
    comments,
  });
});

export { newComment, allComments };
