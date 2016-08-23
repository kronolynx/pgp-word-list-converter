var test = require('tape');
var converter = require('../pgpWordConvert')();

test("test one", assert => {
  actual = converter.toHex(['stairway', 'souvenir', 'flytrap', 'recipe']).toString()
  expected = 'D1,D4,64,C0';
  assert.equal(actual, expected);
  assert.end();
})

test("test two", assert => {
  actual = converter.toHex('stairway souvenir flytrap recipe').toString();
  expected = 'D1,D4,64,C0';
  assert.equal(actual, expected);
  assert.end();
})
test("test three", assert => {
  actual = converter.toHex('stairway,souvenir,flytrap,recipe').toString();
  expected = 'D1,D4,64,C0';
  assert.equal(actual, expected);
  assert.end();
})
test("test five", assert => {
  actual = converter.toWords(['D1', 'D4', '64', 'C0']).toString();
  expected = 'stairway,souvenir,flytrap,recipe';
  assert.equal(actual, expected);
  assert.end();
})

test("test six", assert => {
  actual = converter.toWords('d1d4 64c0').toString()
  expected = 'stairway,souvenir,flytrap,recipe';
  assert.equal(actual, expected);
  assert.end();
})
