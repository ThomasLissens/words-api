const Router = require('@koa/router');
const wordsService = require('../service/words')

const getRandomCategoryObject = async (ctx) => {
    ctx.body = await wordsService.getRandomCategoryObject();
};


module.exports = (app) => {
  const router = new Router({
    prefix: '/words',
  });
  
  router.get(
    '/',
    getRandomCategoryObject
  );
  
  app.use(router.routes()).use(router.allowedMethods());
};  