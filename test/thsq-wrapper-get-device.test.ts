import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();
const wrapper = thsqWrapperFactory();

beforeAll(() => {
  return wrapper.init(process.env.VALID_API_KEY);
});

afterAll(() => {
  wrapper.disconnectFromServer();
});

describe('test the getDevice function', async () => {
  test('device exists', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const device = await wrapper.getDevice(unique);
    expect(device).toBeInstanceOf(Object);
  });

  test('device does not exist', async () => {
    expect.assertions(1);
    const unique = 'f';
    const device = await wrapper.getDevice(unique);
    expect(device).toBe(undefined);
  });
});
