const logger = require("../logger");

const router = require("express").Router();

const { addVehicle } = require("../controllers/vehicle");

const Vehicle = require("../model/vehicle");

router.post("/", addVehicle);

module.exports = router;
