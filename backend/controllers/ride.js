const Ride = require("../model/ride");

exports.createRide = async (req, res) => {
  const owner = req.userId;

  const { type, fromLat, fromLon, toLat, toLon } = req.body;

  const newRide = new Ride({
    type,
    owner,
    fromLat,
    fromLon,
    toLat,
    toLon,
  });

  const ride = await newRide.save();

  res.json(ride);
};

exports.getMyRides = async (req, res) => {
  const owner = req.userId;

  const rides = await Ride.find({ owner });

  res.json(rides);
};

exports.getMyRide = async (req, res) => {
  const owner = req.userId;

  const _id = req.params.id;

  const ride = await Ride.findOne({ owner, _id });

  res.json(ride);
};
