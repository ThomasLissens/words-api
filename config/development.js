module.exports = {
    port: 3000,
    log: {
      level: 'silly',
      disabled: false,
    },
    cors: {
      origins: ['http://localhost:3000'],
      maxAge: 3 * 60 * 60,
    },
  };