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
    const uniqueDevice = {
      time: 1538839131549,
      value: 'f647931d1c7f3c023d0344b4ab576dfa',
    };
    const device = await wrapper.getDevice(uniqueDevice);
    expect(device).toBeInstanceOf(Object);
  });

  test('device does not exist', async () => {
    expect.assertions(1);
    const uniqueDevice = {
      time: 1538839131549,
      value: 'f',
    };
    const device = await wrapper.getDevice(uniqueDevice);
    expect(device).toBe(undefined);
  });
});
