
const winston = require('winston');
const { combine, timestamp, printf, colorize, errors } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    errors({stack: true}),
    colorize({ all: true }),
    timestamp(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});


module.exports = logger;