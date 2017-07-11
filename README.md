# harry-potter-names
Get random Harry Potter names.

[![travis build](https://img.shields.io/travis/gmanriqueUy/harry-potter-names.svg?style=flat-square)](https://travis-ci.org/gmanriqueUy/harry-potter-names)
[![codcov](https://img.shields.io/codecov/c/github/gmanriqueUy/harry-potter-names.svg?style=flat-square)](https://codecov.io/gh/gmanriqueuy/harry-potter-names/)
[![version](https://img.shields.io/npm/v/harry-potter-names.svg?style=flat-square)](http://npm.im/harry-potter-names)
[![downloads](https://img.shields.io/npm/dm/harry-potter-names.svg?style=flat-square)](https://npm-stat.com/charts.html?package=harry-potter-names&from=2016-07-05)
[![MIT Licence](https://img.shields.io/github/license/gmanriqueUy/harry-potter-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Install
Install with **npm**
```
npm install harry-potter-names --save
```
Or if you prefer **yarn**
```
yarn add harry-potter-names
```

## Usage

```javascript
let harryPotterNames = require('harry-potter-names');

// To get array of all names
console.log(harryPotterNames.all);

// To get a random name (a string, of course)
console.log(harryPotterNames.random());

// The random function accepts a number to get an array of random names
console.log(harryPotterNames.random(5));
```

## Other
This library was developed following [this course](https://egghead.io/courses/how-to-write-an-open-source-javascript-library) made by the amazing [Kent C. Dodds](https://twitter.com/kentcdodds).
