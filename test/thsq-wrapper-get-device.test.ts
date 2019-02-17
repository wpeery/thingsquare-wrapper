import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();
const wrapper = thsqWrapperFactory();

beforeAll(() => {
  return wrapper.init(process.env.VALID_API_KEY);
});

describe('test the getDevice function', async () => {
  test('device exists', async () => {
    expect.assertions(1);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
    const device = await wrapper.getDevice(id);
    expect(device).toBeInstanceOf(Object);
  });

  test('device does not exist', async () => {
    expect.assertions(1);
    const unique = 'f';
    const device = await wrapper.getDevice(unique);
    expect(device).toBe(undefined);
  });
});
