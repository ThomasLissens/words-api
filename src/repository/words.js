const { level } = require('winston');
const data = require('../data/words')

const getAll = () => {
  return {
    categoryObjects: data.words
  };
}

const getRandomCategoryObject = () => {
    const randomCategoryIndex = Math.floor(Math.random()*data.words.length);
    const randomCategory = data.words[randomCategoryIndex];

    const maxWords = 5;
    const randomWords = [];
    for (let i = 0; i < maxWords && i < randomCategory.listWords.length; i++) {
        const randomWordIndex = Math.floor(Math.random() * randomCategory.listWords.length);
        randomWords.push(randomCategory.listWords[randomWordIndex]);
    }

    return {
        category: randomCategory.category,
        listWords: randomWords
    };
};

const getLevels = () => {
  const levels = data.levels;
  return {
    levelObjects: levels
  }
}

const getLevelsName = () => {
  const levels = data.levels;

  const levelsName = levels.map((levelObj) => {
    return { level: levelObj.level };
  });

  return {
    levelsName: levelsName
  }
}

module.exports = {
    getAll,
    getRandomCategoryObject,
    getLevels,
    getLevelsName
}