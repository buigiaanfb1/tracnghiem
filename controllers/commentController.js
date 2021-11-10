import Comment from '../models/comment';
import User from '../models/user';
import catchAsyncError from '../middlewares/catchAsyncError';
import ErrorHandler from '../utils/errorHandler';
import APIFeatures from '../utils/apiFeatures';

const newComment = catchAsyncError(async (req, res, next) => {
  const courseComments = await Comment.findOne({
    course: req.body.courseId,
  });
  const user = await User.findById(req.body.user);

  if (!user) return next(new ErrorHandler('Invalid User', 400));

  const comment = {
    name: user.name,
    avatar: user.avatar.url,
    content: req.body.content,
  };

  let commentAfterSaved = null;

  if (courseComments) {
    courseComments.comments = [...courseComments.comments, comment];
    await courseComments.save().then((comments) => {
      commentAfterSaved = comments.comments[comments.comments.length - 1];
    });
  } else {
    const comment = await Comment.create({
      course: req.body.courseId,
      comments: [comment],
    });
  }
  return res.status(200).json({
    success: true,
    comment: commentAfterSaved,
  });
});

const allComments = catchAsyncError(async (req, res, next) => {
  const comments = await Comment.findOne({ course: req.query.id });
  if (!comments) {
    return next(new ErrorHandler('No comments was found with this ID', 400));
  }

  return res.status(200).json({
    success: true,
    comments,
  });
});

const replyComment = catchAsyncError(async (req, res, next) => {
  const comments = await Comment.findOne({ course: req.query.id });
  if (!comments) {
    return next(new ErrorHandler('No comments was found with this ID', 400));
  }
  const comment = comments.comments.filter(
    (comment) => comment._id === req.query.commentId
  );
  comment.reply = [...comment.reply];
});

export { newComment, allComments };
