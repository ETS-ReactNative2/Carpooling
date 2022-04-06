const Vehicle = require("../model/vehicle");
const { sendError } = require("../utils/helper");

exports.addVehicle = async (req, res) => {
  //const owner = req.userId;
  try {
    const { type, passenger } = req.body;

    const newVehicle = new Vehicle({
      type,
      passenger,
    });

    const vehicle = await newVehicle.save();

    res.json(vehicle);
  } catch (error) {
    sendError(res, error.message, 500);
  }
};
