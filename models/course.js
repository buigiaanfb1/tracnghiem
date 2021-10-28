const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  categoryId: {
    type: Number,
    default: 1,
  },
  questions: [{}],
  level: {
    type: String,
    default: 'beginner',
  },
  name: {
    type: String,
    required: [true, 'Please enter name of the course'],
  },
  slug: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please describe a little about you course'],
  },
  status: {
    type: String,
    default: 'private',
  },
  thumbnailImage: {
    type: String,
    default: 'null',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  totalEnrolled: {
    type: Number,
    default: 0,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
  seoKeywords: {
    type: String,
    required: [true, 'Add keywords to SEO'],
  },
  totalQuestions: {
    type: Number,
    required: [true, 'Add number of questions.'],
  },
});

module.exports =
  mongoose.models.Course || mongoose.model('Course', courseSchema);
