import Comment from '../models/comment';
import Course from '../models/course';
import User from '../models/user';
import catchAsyncError from '../middlewares/catchAsyncError';
import ErrorHandler from '../utils/errorHandler';
import APIFeatures from '../utils/apiFeatures';
import { handleLike } from '../helpers/reactionComment';
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

  if (!courseComments) {
    const course = await Course.findById(req.query.courseId);
    if (!course) {
      return next(new ErrorHandler('Course not found', 400));
    }
  }

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
      course: req.query.courseId,
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

  if (req.body.content === null || req.body.content.length === 0) {
    return next(new ErrorHandler('Please enter your content', 400));
  }
  if (!commentModel) {
    return next(new ErrorHandler('Invalid course', 404));
  }

  const commentIndex = commentModel.comments.findIndex(
    (comment) => comment._id == req.query.commentId
  );

  if (commentIndex === -1) {
    return next(
      new ErrorHandler('No comments of the course was found with this ID', 404)
    );
  }

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

const reactionComment = catchAsyncError(async (req, res, next) => {
  const commentModel = await Comment.findOne({ course: req.query.courseId });

  if (!commentModel) {
    return next(new ErrorHandler('Invalid course', 404));
  }

  let types = ['like', 'dislike'];

  if (!types.includes(req.query.type)) {
    return next(new ErrorHandler('Invalid type', 400));
  }

  const commentIndex = commentModel.comments.findIndex(
    (comment) => comment._id == req.query.commentId
  );
  if (commentIndex === -1) {
    return next(new ErrorHandler('Comment not found!', 400));
  }
  const commentAfterFilter = handleLike(
    req.user,
    commentModel.comments[commentIndex],
    req.query.type
  );

  commentModel.comments[commentIndex] = commentAfterFilter;

  await commentModel.save();

  return res.status(200).json({
    success: true,
  });
});

export { newComment, replyComment, allComments, reactionComment };
