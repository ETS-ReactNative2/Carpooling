const logger = require("../logger");

const router = require("express").Router();

const { createRide, getMyRides, getMyRide } = require("../controllers/ride");

const Ride = require("../model/ride");

router.post("/", createRide);

router.get("/", getMyRides);

router.get("/:id", getMyRide);

module.exports = router;
