import thsqWrapper from '../src/thsq-wrapper';

test('constructor for thsq-wrapper', () => {
  expect(thsqWrapper);
});

test('Test initialize method', () => {
  expect(thsqWrapper.initialize());
});
