import { thsqWrapperFactory } from '../src/thsq-wrapper';
import { Device, Devices } from '../src/index';

require('dotenv').config();
const wrapper = thsqWrapperFactory();

beforeAll(() => {
  return wrapper.init(process.env.VALID_API_KEY);
});

describe('test the getVariableHistory function', async () => {
  test('flow1, device exists', async () => {
    expect.assertions(2);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
    const type = 's';
    const variableName = 'flow1';
    const numDataPoints = '10';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeInstanceOf(Object);
    expect(variableHistory.length).toBe(10);
  });
});

describe('test the getVariableHistory function', async () => {
  test('zero data points', async () => {
    expect.assertions(2);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
    const type = 's';
    const variableName = 'flow1';
    const numDataPoints = '0';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeInstanceOf(Object);
    expect(variableHistory.length).toBe(96);
  });
});

describe('test the getVariableHistory function', async () => {
  test('flow2, device exists', async () => {
    expect.assertions(2);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
    const type = 's';
    const variableName = 'flow2';
    const numDataPoints = '5';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeInstanceOf(Object);
    expect(variableHistory.length).toBe(5);
  });
});

describe('test the getVariableHistory function', async () => {
  test('flow1, device does not exist', async () => {
    expect.assertions(1);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd3';
    const type = 's';
    const variableName = 'flow1';
    const numDataPoints = '10';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeUndefined();
  });
});

describe('test the getVariableHistory function', async () => {
  test('variable does not exist, device exists', async () => {
    expect.assertions(1);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
    const type = 's';
    const variableName = 'flw';
    const numDataPoints = '10';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeUndefined();
  });
});

describe('test the getVariableHistory function', async () => {
  test('device and variable do not exist', async () => {
    expect.assertions(1);
    const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd3';
    const type = 's';
    const variableName = 'flow';
    const numDataPoints = '10';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeUndefined();
  });
});

describe('test the getVariableHistory function', async () => {
  test('0 datapoints', async () => {
    expect.assertions(1);
    const id = '3a67bdc0-7b69-4879-9d08-b2902244f75c';
    const type = 's';
    const variableName = 'flow1';
    const numDataPoints = '0';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory.length).toBe(488);
  });
});

describe('test the getVariableHistory function', async () => {
  test('-1 datapoints', async () => {
    expect.assertions(1);
    const id = '3a67bdc0-7b69-4879-9d08-b2902244f75c';
    const type = 's';
    const variableName = 'flow1';
    const numDataPoints = '-1';

    const variableHistory = await wrapper.getVariableHistory(id,
                                                             type,
                                                             variableName,
                                                             numDataPoints);
    expect(variableHistory).toBeUndefined();
  });
});
