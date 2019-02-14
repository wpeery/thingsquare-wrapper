import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();

test('constructor for thsq-wrapper', () => {
  const wrapper = thsqWrapperFactory();
});

describe('Test init function', () => {
  test('invalid api key', async () => {
    expect.assertions(1);
    const invalidApiKey = '1234';
    const wrapper = thsqWrapperFactory();
    try {
      await wrapper.init(invalidApiKey);
      fail();
    } catch (e) {
      expect(e.message).toBe('Request failed with status code 403\nAPI key might be incorrect');
    }
  });

  test('valid api key', async () => {
    expect.assertions(1);
    const apiKey = process.env.VALID_API_KEY;
    const wrapper = thsqWrapperFactory();
    const result = await wrapper.init(apiKey);
    expect(result).toBe('user-ok');
  });

  test('then get devices', async () => {
    expect.assertions(3);
    const apiKey = process.env.VALID_API_KEY;
    const wrapper = thsqWrapperFactory();
    const result = await wrapper.init(apiKey);
    expect(result).toBe('user-ok');
    const devices = await wrapper.getDeviceList();
    expect(devices).toBeInstanceOf(Object);
    expect(Object.keys(devices).length).toBeGreaterThan(0);
  });

});
