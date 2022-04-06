const logger = require("../logger");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
  })
  .then(() => logger.info(`logName=databaseConnected`))
  .catch((err) => logger.error(`logName=databaseConnectionErrored`, err));
