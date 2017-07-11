const

expect = require('chai').expect,

harryPotterNames = require('./index');

describe('Harry Potter names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(harryPotterNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(item => {
          return typeof item === 'string';
        });
      }
    });

    it('should contain "Harry Potter"', function() {
      expect(harryPotterNames.all).to.include("Harry Potter");
    });
  });

  describe('random', function() {
    it('should return a random item from harryPotterNames.all', function() {
      let randomItem = harryPotterNames.random();

      expect(harryPotterNames.all).to.include(randomItem);
    });
  });
});
