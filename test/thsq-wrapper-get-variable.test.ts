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

describe('test the getVariable function', async () => {
  test('flow1, device exists', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 's';
    const variableName = 'flow1';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBeInstanceOf(Object);
  });

  test('flow2, device exists', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 's';
    const variableName = 'flow2';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBeInstanceOf(Object);
  });

  test('flow1, device does not exist', async () => {
    expect.assertions(1);
    const unique = '1';
    const type = 's';
    const variableName = 'flow1';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBe(undefined);
  });

  test('flow2, device does not exist', async () => {
    expect.assertions(1);
    const unique = '1';
    const type = 's';
    const variableName = 'flow2';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBe(undefined);
  });

  test('variable does not exist', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 's';
    const variableName = 'flow';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBe(undefined);
  });

  test('type does not exist', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 'e';
    const variableName = 'flow1';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBe(undefined);
  });

  test('variable with wrong type', async () => {
    expect.assertions(1);
    const unique = 'f647931d1c7f3c023d0344b4ab576dfa';
    const type = 'd';
    const variableName = 'flow1';

    const variable = await wrapper.getVariable(unique, type, variableName);
    expect(variable).toBe(undefined);
  });
});
