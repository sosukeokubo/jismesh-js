const { toEnvelope } = require('../');

test("Not same level", () => {
  expect(() => {
    [...toEnvelope('533935446', '53393599')];
  }).toThrowError('the level must be the same for meshCodeSW and meshCodeNE.');
});

test("Tokyo", () => {
  expect([...toEnvelope('533935446', '533946136')])
    .toStrictEqual(['533935446', '533936336', '533945226', '533946116', '533945246', '533946136']);
});
