# Marconi
A Javascript Library to work with Morse Code

[![Travis](https://img.shields.io/travis/adamisntdead/Marconi.svg?maxAge=2592000)](https://travis-ci.org/adamisntdead/Marconi)
[![codecov](https://codecov.io/gh/adamisntdead/Marconi/branch/master/graph/badge.svg)](https://codecov.io/gh/adamisntdead/Marconi)
[![GitHub issues](https://img.shields.io/github/issues/adamisntdead/Marconi.svg)](https://github.com/adamisntdead/Marconi/issues)
[![GitHub forks](https://img.shields.io/github/forks/adamisntdead/Marconi.svg)](https://github.com/adamisntdead/Marconi/network)
[![GitHub stars](https://img.shields.io/github/stars/adamisntdead/Marconi.svg)](https://github.com/adamisntdead/Marconi/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/adamisntdead/Marconi/master/LICENSE)

[![npm](https://img.shields.io/npm/dt/marconi.svg?maxAge=2592000)](https://www.npmjs.com/package/Marconi)
[![npm](https://img.shields.io/npm/v/marconi.svg?maxAge=2592000)](https://www.npmjs.com/package/Marconi)

## Usage
##### Nodejs
Install the module `marconi`

app.js
```
// Require The Module
var marconi = require('marconi');

console.log('... --- ...', '=', marconi.decode('... --- ...'));
console.log('Hello = ' + marconi.encode('Hello'));
```
