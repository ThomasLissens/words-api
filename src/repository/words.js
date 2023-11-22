const data = require('../data/words')

const getRandomCategoryObject = () => {
    return data.words[Math.floor(Math.random()*data.words.length)];
};

module.exports = {
    getRandomCategoryObject,
}