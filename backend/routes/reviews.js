const logger = require("../logger");

const router = require("express").Router();

const { addReview } = require("../controllers/review");

const Review = require("../model/vehicle");

router.post("/", addReview);

module.exports = router;
