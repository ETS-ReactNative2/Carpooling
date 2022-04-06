const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  type: {
    type: String,
    enum: ["motorbike", "threewheeler", "bus", "car", "van", "suv"],
  },
  passenger: {
    type: Number,
    required: true,
  },
  registrationCert: {
    type: String,
  },
});

const model = mongoose.model("Vehicle", VehicleSchema);

module.exports = model;
