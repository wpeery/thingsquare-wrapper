"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const thsq_wrapper_1 = require("../src/thsq-wrapper");
require('dotenv').config();
const wrapper = thsq_wrapper_1.thsqWrapperFactory();
beforeAll(() => {
    return wrapper.init(process.env.VALID_API_KEY);
});
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('flow1, device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(2);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flow1';
        const numDataPoints = '10';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeInstanceOf(Object);
        expect(variableHistory.length).toBe(10);
    }));
}));
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('zero data points', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(2);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flow1';
        const numDataPoints = '0';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeInstanceOf(Object);
        expect(variableHistory.length).toBe(96);
    }));
}));
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('flow2, device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(2);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flow2';
        const numDataPoints = '5';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeInstanceOf(Object);
        expect(variableHistory.length).toBe(5);
    }));
}));
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('flow1, device does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd3';
        const type = 's';
        const variableName = 'flow1';
        const numDataPoints = '10';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeUndefined();
    }));
}));
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('variable does not exist, device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flw';
        const numDataPoints = '10';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeUndefined();
    }));
}));
describe('test the getVariableHistory function', () => __awaiter(this, void 0, void 0, function* () {
    test('device and variable do not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd3';
        const type = 's';
        const variableName = 'flow';
        const numDataPoints = '10';
        const variableHistory = yield wrapper.getVariableHistory(id, type, variableName, numDataPoints);
        expect(variableHistory).toBeUndefined();
    }));
}));
