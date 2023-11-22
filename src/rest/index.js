const Router = require('@koa/router');
const iWordsRouter = require('./words')

module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  iWordsRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};