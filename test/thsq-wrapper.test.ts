import { thsqWrapperFactory } from '../src/thsq-wrapper';

test('constructor for thsq-wrapper', () => {
  const wrapper = thsqWrapperFactory();
  expect(wrapper).toHaveProperty('thsq');
  wrapper.disconnectFromServer();
});

test('initialize, invalid api key', async () => {
  expect.assertions(1);
  const invalidApiKey = '1234';
  const wrapper = thsqWrapperFactory();
  try {
    await wrapper.init(invalidApiKey);
    fail();
  } catch (e) {
    expect(e.message).toBe('API key is incorrect');
  }
  wrapper.disconnectFromServer();
});

test('initialize, valid api key', async () => {
  expect.assertions(1);
  const apiKey = '3d96ac25ccda65b5f177921a2ac08e38';
  const wrapper = thsqWrapperFactory();
  const result = await wrapper.init(apiKey);
  expect(result).toEqual({});
  wrapper.disconnectFromServer();
});

test('initialize, no api key', async () => {
  expect.assertions(1);
  const wrapper = thsqWrapperFactory();
  const result = await wrapper.initWithoutKey();
  expect(result).toEqual({});
  wrapper.disconnectFromServer();
});
