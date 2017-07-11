const
uniqueRandomArray = require('unique-random-array'),
harryPotterNames = require('./harry-potter-names.json'),
getRandomItem = uniqueRandomArray(harryPotterNames);

module.exports = {
  all: harryPotterNames,
  random: random
};

function random (number) {
  if(number === undefined) {
    return getRandomItem();
  } else {
    let randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
