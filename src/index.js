const
uniqueRandomArray = require('unique-random-array'),
harryPotterNames = require('./harry-potter-names.json');

module.exports = {
  all: harryPotterNames,
  random: uniqueRandomArray(harryPotterNames)
};
