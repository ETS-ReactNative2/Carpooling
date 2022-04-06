const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const rideSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["passenger", "driver"],
  },
  owner: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  fromLat: {
    type: Number,
    required: true,
  },
  fromLon: {
    type: Number,
    required: true,
  },
  toLat: {
    type: Number,
    required: true,
  },
  toLon: {
    type: Number,
    required: true,
  },
  passengers: {
    type: Number,
  },
  time: {
    type: Date,
  },
});

module.exports = mongoose.model("Ride", rideSchema);
