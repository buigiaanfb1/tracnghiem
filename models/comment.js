const mongoose = require('mongoose');
const validator = require('validator');

const commentSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course',
  },
  comments: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      content: {
        type: String,
        required: [true, 'Please enter your content'],
      },
      like: {
        type: Array,
        default: [],
      },
      dislike: {
        type: Array,
        default: [],
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
    },
  ],
});

module.exports =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema);
