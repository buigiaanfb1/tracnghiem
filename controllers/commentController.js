import Comment from '../models/comment';
import User from '../models/user';
import catchAsyncError from '../middlewares/catchAsyncError';
import ErrorHandler from '../utils/errorHandler';
import APIFeatures from '../utils/apiFeatures';
import mongoose from 'mongoose';

const allComments = catchAsyncError(async (req, res, next) => {
  const comments = await Comment.findOne({ course: req.query.courseId });
  if (!comments) {
    return next(new ErrorHandler('No comments was found with this ID', 400));
  }

  return res.status(200).json({
    success: true,
    comments,
  });
});

const newComment = catchAsyncError(async (req, res, next) => {
  const courseComments = await Comment.findOne({
    course: req.query.courseId,
  });

  if (!courseComments) return next(new ErrorHandler('Course not found', 400));

  const data = {
    id: req.user._id,
    name: req.user.name,
    avatar: req.user.avatar.url,
    content: req.body.content,
  };

  let commentAfterSaved = null;

  if (courseComments) {
    courseComments.comments = [...courseComments.comments, data];
    await courseComments.save().then((comments) => {
      commentAfterSaved = comments.comments[comments.comments.length - 1];
    });
  } else {
    const comments = await Comment.create({
      course: req.body.courseId,
      comments: [data],
    });
    commentAfterSaved = comments.comments[0];
  }
  return res.status(200).json({
    success: true,
    comment: commentAfterSaved,
  });
});

const replyComment = catchAsyncError(async (req, res, next) => {
  const commentModel = await Comment.findOne({ course: req.query.courseId });

  if (!commentModel) {
    return next(new ErrorHandler('Invalid course', 400));
  }

  const commentIndex = commentModel.comments.findIndex(
    (comment) => comment._id == req.query.commentId
  );

  if (commentIndex === -1) {
    return next(
      new ErrorHandler('No comments of the course was found with this ID', 400)
    );
  }
  console.log(commentModel.comments[commentIndex]);

  const data = {
    id: new mongoose.Types.ObjectId(),
    userId: req.user._id,
    name: req.user.name,
    avatar: req.user.avatar.url,
    content: req.body.content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  let commentAfterSaved = null;

  commentModel.comments[commentIndex].reply = [
    ...commentModel.comments[commentIndex].reply,
    data,
  ];
  await commentModel.save().then((comments) => {
    commentAfterSaved =
      comments.comments[commentIndex].reply[
        comments.comments[commentIndex].reply.length - 1
      ];
  });
  commentModel.save();

  return res.status(200).json({
    success: true,
    comment: commentAfterSaved,
  });
});

export { newComment, replyComment, allComments };
