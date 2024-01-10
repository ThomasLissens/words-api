const Router = require('@koa/router');
const wordsService = require('../service/words')

const getAll = async (ctx) => {
  ctx.body = await wordsService.getAll();
};

const getRandomCategoryObject = async (ctx) => {
  ctx.body = await wordsService.getRandomCategoryObject();
};

const getLevels = async (ctx) => {
  ctx.body = await wordsService.getLevels();
}

const getLevelsName = async (ctx) => {
  ctx.body = await wordsService.getLevelsName();
}

module.exports = (app) => {
  const router = new Router({
    prefix: '/words',
  });

  router.get(
    '/',
    getAll
  );

  router.get(
    '/random',
    getRandomCategoryObject
  );
  
  router.get(
    '/levels',
    getLevels
  )

  router.get(
    '/levelsName',
    getLevelsName
  )

  app.use(router.routes()).use(router.allowedMethods());
};  