'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = decode;
exports.encode = encode;
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

function encode(string) {
    var morseLibSwapped = switchValues(morseLib);
    // Trim Whitespace
    string = string.trim().toUpperCase();

    // Split into the words
    var wordsArr = string.split(' ');

    // Split the charachters of each word and add it to a
    // new array
    var letterArr = [];
    for (var _i = 0; _i < wordsArr.length; _i++) {
        letterArr.push(wordsArr[_i].split(''));
    }

    // Run through the array and encode
    var encoded = [];
    for (var i = 0; i < letterArr.length; i++) {
        var word = [];
        for (var j = 0; j < letterArr[i].length; j++) {
            word.push(morseLibSwapped[letterArr[i][j]]);
        }
        encoded.push(word.join(' '));
    }

    // Return the decoded words, joined by 3 spaces
    return encoded.join('   ');
}

function switchValues(o) {
    var t = {};
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            t[o[i]] = i;
        }
    }
    return t;
}