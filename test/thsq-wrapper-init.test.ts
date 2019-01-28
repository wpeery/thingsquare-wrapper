import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();

test('constructor for thsq-wrapper', () => {
  const wrapper = thsqWrapperFactory();
  expect(wrapper).toHaveProperty('thsq');
  wrapper.disconnectFromServer();
});

describe('Test init function', () => {
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
    const apiKey = process.env.VALID_API_KEY;
    const wrapper = thsqWrapperFactory();
    const result = await wrapper.init(apiKey);
    expect(result).toBeInstanceOf(Object);
    wrapper.disconnectFromServer();
  });
});