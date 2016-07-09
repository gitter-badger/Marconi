(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["marconi"] = factory();
	else
		root["marconi"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.decode = decode;
	var morseLib = {
	    '-.-.--': '!',
	    '.-..-.': '"',
	    '...-..-': '$',
	    '.-...': '&',
	    '.----.': '\'',
	    '-.--.': '(',
	    '-.--.-': ')',
	    '.-.-.': '+',
	    '--..--': ',',
	    '-....-': '-',
	    '.-.-.-': '.',
	    '-..-.': '/',
	    '-----': '0',
	    '.----': '1',
	    '..---': '2',
	    '...--': '3',
	    '....-': '4',
	    '.....': '5',
	    '-....': '6',
	    '--...': '7',
	    '---..': '8',
	    '----.': '9',
	    '---...': ':',
	    '-.-.-.': ';',
	    '-...-': '=',
	    '..--..': '?',
	    '.--.-.': '@',
	    '.-': 'A',
	    '-...': 'B',
	    '-.-.': 'C',
	    '-..': 'D',
	    '.': 'E',
	    '..-.': 'F',
	    '--.': 'G',
	    '....': 'H',
	    '..': 'I',
	    '.---': 'J',
	    '-.-': 'K',
	    '.-..': 'L',
	    '--': 'M',
	    '-.': 'N',
	    '---': 'O',
	    '.--.': 'P',
	    '--.-': 'Q',
	    '.-.': 'R',
	    '...': 'S',
	    '-': 'T',
	    '..-': 'U',
	    '...-': 'V',
	    '.--': 'W',
	    '-..-': 'X',
	    '-.--': 'Y',
	    '--..': 'Z',
	    '..--.-': '_',
	    '...---...': 'SOS'
	};
	function decode(morseCode) {
	    // Take away whitespace at the start and end
	    morseCode = morseCode.trim();

	    // Split the given string of morse code into words
	    var wordsArr = morseCode.split('   ');

	    // Split each word into charachters (they are seperated by spaces)
	    var codeArr = [];
	    for (var i = 0; i < wordsArr.length; i++) {
	        codeArr.push(wordsArr[i].split(' '));
	    }

	    // Loop through each word and then each charachter in it to decode, and add each to an array of words
	    var decoded = [];
	    for (var i = 0; i < codeArr.length; i++) {
	        var word = [];
	        for (var j = 0; j < codeArr[i].length; j++) {
	            word.push(morseLib[codeArr[i][j]]);
	        }
	        decoded.push(word.join(''));
	    }
	    // Return the decoded words, joined by spaces
	    return decoded.join(' ');
	}

/***/ }
/******/ ])
});
;