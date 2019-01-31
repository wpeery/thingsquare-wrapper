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

describe('test the getDeviceList function', async () => {
  test('get device list', async () => {
    expect.assertions(1);
    const devices = await wrapper.getDeviceList();
    expect(devices).toBeInstanceOf(Object);
  });
});
