Convert hex strings to PGP word lists and vice-versa.

See [PGP word list on WikiPedia](http://en.wikipedia.org/wiki/PGP_word_list]) for more information.
## Installation
    npm install pgp-word-list-converter

## Usage

```javascript
var converter = require('pgpWordConvert')();
// convert array of words
console.log(converter.toHex(['stairway', 'souvenir', 'flytrap', 'recipe']));
//convert string of words, the words can be separated with comas
console.log(converter.toHex('stairway souvenir flytrap recipe'));
// convert array of hexadecimals
console.log(converter.toWords(['D1', 'D4', '64', 'C0']));
// convert string of hexadecimals
// string examples: 'd1d464c0' , 'd1,d4,64,c0', 'd1 d4 64 c0'
console.log(converter.toWords('d1d4 64c0'));
```
As an optional parameter we can pass a custom PGP word list
```javascript
  var converter = require('pgpWordConvert')(customList);
```

## License

MIT license. See [LICENSE]
