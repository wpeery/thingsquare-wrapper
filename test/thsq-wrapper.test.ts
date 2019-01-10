import thsqWrapper from '../src/thsq-wrapper';

test('constructor for thsq-wrapper valid apiKey', () => {
  expect(thsqWrapper('test_api_key_1234'));
});

test('constructor for thsq-wrapper invalid apiKey', () => {
  expect(thsqWrapper('invalid_key'));
});
