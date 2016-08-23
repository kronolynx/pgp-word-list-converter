'strict';

var pgpWordConvert = (wordList) => {
  wordList = wordList || require('./pgpWordList')
  var hexToWord = (hex, position) =>
    wordList[hex][position % 2];

  var hexToWords = (hexs) => {
    return hexs.map((hex, index) =>
      hexToWord(hex.toUpperCase(), index)
    );
  }

  var wordToHex = (word) => {
    var contains = (a, w) => {
      var i = a.length;
      while (i--) {
        if (a[i].toUpperCase() === w.toUpperCase())
          return true;
      }
      return false;
    }

    for (var index in wordList) {
      if (contains(wordList[index], word))
        return index;
    };
  }

  var wordsToHex = (words) => {
    return words.map((word) =>
      wordToHex(word)
    );
  }

  var toHex = (words) => {
    if (typeof words === 'string')
      words = words.trim().split(/[ ,]+/);
    return wordsToHex(words);
  }

  var toWords = function(hex) {
    if (typeof hex === 'string')
      hex = hex.toUpperCase().replace(/[^0-9A-F]/g, '').match(/.{1,2}/g)
    return hexToWords(hex);
  }

  return {
    toHex: toHex,
    toWords: toWords
  }
}
module.exports = pgpWordConvert;
