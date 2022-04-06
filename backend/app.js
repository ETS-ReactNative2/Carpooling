const express = require("express");

const logger = require("./logger");

const NODE_ENV = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `.env.${NODE_ENV}` });

require("./db");

const cors = require("cors");

const { authenticateToken } = require("./middlewares/user");
const usersRouter = require("./routes/users");

const ridesRouter = require("./routes/rides");

const vehiclesRouter = require("./routes/vehicles");

const reviewsRouter = require("./routes/reviews");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/apis/v1/users", usersRouter);

app.use("/apis/v1/rides", authenticateToken, ridesRouter);

app.use("/apis/v1/vehicles", authenticateToken, vehiclesRouter);

app.use("/apis/v1/reviews", authenticateToken, reviewsRouter);

app.listen(PORT, () => {
  logger.info(`logName=serverStarted, port=${PORT}`);
});
