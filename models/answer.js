const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answers: [{}],
});

module.exports =
  mongoose.models.Answer || mongoose.model('Answer', answerSchema);
