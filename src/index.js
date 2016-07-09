const morseLib = {
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
}
export function decode(morseCode) {
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
            word.push(morseLib[codeArr[i][j]])
        }
        decoded.push(word.join(''));
    }
    // Return the decoded words, joined by spaces
    return decoded.join(' ');
}

export function encode(string) {
    const morseLibSwapped = switchValues(morseLib);
    // Trim Whitespace
    string = string.trim().toUpperCase();

    // Split into the words
    const wordsArr = string.split(' ');

    // Split the charachters of each word and add it to a
    // new array
    let letterArr = [];
    for (let i = 0; i < wordsArr.length; i++) {
        letterArr.push(wordsArr[i].split(''));
    }

    // Run through the array and encode
    let encoded = [];
    for (var i = 0; i < letterArr.length; i++) {
        var word = [];
        for (var j = 0; j < letterArr[i].length; j++) {
            word.push(morseLibSwapped[letterArr[i][j]])
        }
        encoded.push(word.join(' '));
    }

    // Return the decoded words, joined by 3 spaces
    return encoded.join('   ');

}

function switchValues(o) {
    var t = {};
    for (var i in o) {
        if(o.hasOwnProperty(i)){
            t[o[i]] = i ;
        }
    }
    return t;
}
