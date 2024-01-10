const wordsRepository = require('../repository/words');

const getAll = async () => {
  const categoryObject = await wordsRepository.getAll();
  return categoryObject;
};

const getRandomCategoryObject = async () => {
  const categoryObject = await wordsRepository.getRandomCategoryObject();
  return categoryObject;
};

const getLevels = async () => {
  const levelsObject = await wordsRepository.getLevels();
  return levelsObject;
}

const getLevelsName = async () => {
  const levelsNameObject = await wordsRepository.getLevelsName();
  return levelsNameObject;
}

module.exports = {
  getAll,
  getRandomCategoryObject,
  getLevels,
  getLevelsName,
}