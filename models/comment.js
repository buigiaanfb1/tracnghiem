const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: [true, 'Course ID is required'],
  },
  username: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: [50, 'Your name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [validator.isEmail, 'Please enter valid email address'],
  },
  avatar: {
    url: {
      type: String,
    },
  },
  content: {
    type: String,
    required: [true, 'Please enter your content'],
  },
  reply: { type: Array, default: [] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);
