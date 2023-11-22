const wordsRepository = require('../repository/words');

const getRandomCategoryObject = async () => {
    const categoryObject = await wordsRepository.getRandomCategoryObject();
    return {
      categoryObject
    };
};

module.exports = {
    getRandomCategoryObject
}