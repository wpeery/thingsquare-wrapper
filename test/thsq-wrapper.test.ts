import { thsqWrapperFactory } from '../src/thsq-wrapper';

test('constructor for thsq-wrapper', () => {
  const wrapper = thsqWrapperFactory();
  expect(wrapper).toHaveProperty('thsq');
  wrapper.disconnectFromServer();
});

test('initialize, invalid api key', () => {
  expect.assertions(1);
  const apiKey = '1234';
  const wrapper = thsqWrapperFactory();
  return wrapper.init(apiKey).then((devices) => { return devices; }).then((data) => {
    expect(data).toBe(undefined);
    wrapper.disconnectFromServer();
  });
});

test('initialize, valid api key', () => {
  expect.assertions(1);
  const apiKey = 'test_api_key_1234';
  const wrapper = thsqWrapperFactory();
  return wrapper.init(apiKey).then((devices) => { return devices; }).then((data) => {
    expect(data).toEqual({});
    wrapper.disconnectFromServer();
  });
});

test('initialize, no api key', () => {
  expect.assertions(1);
  const wrapper = thsqWrapperFactory();
  return wrapper.initWithoutKey().then((devices) => { return devices; }).then((data) => {
    expect(data).toEqual({});
    wrapper.disconnectFromServer();
  });
});
