const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const reviewSchema = new mongoose.Schema({
  owner: {
    type: ObjectId,
    ref: 'User',
    //required: true,
  },
  about: {
    type: ObjectId,
    ref: 'User',
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  }
});

const model = mongoose.model('Review', reviewSchema);

module.exports = model;
