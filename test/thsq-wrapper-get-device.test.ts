import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();

describe('test the getDevice function', async () => {
  test('get device that exists', async () => {
    expect.assertions(1);
    const uniqueDevice = 'f647931d1c7f3c023d0344b4ab576dfa';
    const wrapper = thsqWrapperFactory();
    wrapper.init(process.env.VALID_API_KEY);
    const device = await wrapper.getDevice(uniqueDevice);
    expect(device).toBeInstanceOf(Object);
    wrapper.disconnectFromServer();
  });

  test('get device that does not exist', async () => {
    expect.assertions(1);
    const uniqueDevice = '123451234notarealdevice';
    const wrapper = thsqWrapperFactory();
    wrapper.init(process.env.VALID_API_KEY);
    const device = await wrapper.getDevice(uniqueDevice);
    expect(device).toBeUndefined();
    wrapper.disconnectFromServer();
  });
});
