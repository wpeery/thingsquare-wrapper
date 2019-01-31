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

describe('test the getVariableHistory function', async () => {
  test('flow1, device exists', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 's';
    const variableName = 'flow1';
    const options = { num: 10 };

    const variable = await wrapper.getVariableHistory(unique,
                                                      type,
                                                      variableName,
                                                      options);
    expect(variable).toBeInstanceOf(Object);
  });
});
