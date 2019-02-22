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
describe('test the getVariable function', () => __awaiter(this, void 0, void 0, function* () {
    test('flow1, device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flow1';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBeInstanceOf(Object);
    }));
    test('flow2, device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const type = 's';
        const variableName = 'flow2';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBeInstanceOf(Object);
    }));
    test('flow1, device does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = '1';
        const type = 's';
        const variableName = 'flow1';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBe(undefined);
    }));
    test('flow2, device does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = '1';
        const type = 's';
        const variableName = 'flow2';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBe(undefined);
    }));
    test('variable does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'f647931d1c7f3c023d0344b4ab576dfa';
        const type = 's';
        const variableName = 'flow';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBe(undefined);
    }));
    test('type does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'f647931d1c7f3c023d0344b4ab576dfa';
        const type = 'e';
        const variableName = 'flow1';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBe(undefined);
    }));
    test('variable with wrong type', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'f647931d1c7f3c023d0344b4ab576dfa';
        const type = 'd';
        const variableName = 'flow1';
        const variable = yield wrapper.getVariable(id, type, variableName);
        expect(variable).toBe(undefined);
    }));
}));
