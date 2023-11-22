const config = require('config');
const winston = require('winston');
const { combine, timestamp, colorize, printf } = winston.format;

const NODE_ENV = config.get('env');

let rootLogger;

const getLogger = () => {
  if (!rootLogger) {
    throw new Error('You must first initialize the logger');
  }

  return rootLogger;
};

const loggerFormat = () => {
  const formatMessage = ({
    level,
    message,
    timestamp,
    name = 'server',
    ...rest
  }) =>
    `${timestamp} | ${name} | ${level} | ${message} | ${JSON.stringify(rest)}`;

  const formatError = ({ error: { stack }, ...rest }) =>
    `${formatMessage(rest)}\n\n${stack}\n`;
  const format = (info) =>
    info.error instanceof Error ? formatError(info) : formatMessage(info);
  return combine(colorize(), timestamp(), printf(format));
};

const initializeLogger = ({
  level,
  disabled = false,
  defaultMeta = {}
}) => {
  const transports = NODE_ENV === 'test' ? [
    new winston.transports.File({
      filename: 'test.log',
      silent: disabled,
    }),
  ] : [
    new winston.transports.Console({
      silent: disabled,
    }),
  ];

  rootLogger = winston.createLogger({
    level,
    format: loggerFormat(),
    defaultMeta,
    transports,
  });

  return rootLogger;
};

module.exports = {
  initializeLogger,
  getLogger,
};