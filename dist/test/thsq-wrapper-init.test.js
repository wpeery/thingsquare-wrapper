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
test('constructor for thsq-wrapper', () => {
    const wrapper = thsq_wrapper_1.thsqWrapperFactory();
});
describe('Test init function', () => {
    test('invalid api key', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const invalidApiKey = '1234';
        const wrapper = thsq_wrapper_1.thsqWrapperFactory();
        try {
            yield wrapper.init(invalidApiKey);
            fail();
        }
        catch (e) {
            expect(e.message).toBe('Request failed with status code 403\nAPI key might be incorrect');
        }
    }));
    test('valid api key', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const apiKey = process.env.VALID_API_KEY;
        const wrapper = thsq_wrapper_1.thsqWrapperFactory();
        const result = yield wrapper.init(apiKey);
        expect(result).toBe('user-ok');
    }));
    test('then get devices', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(3);
        const apiKey = process.env.VALID_API_KEY;
        const wrapper = thsq_wrapper_1.thsqWrapperFactory();
        const result = yield wrapper.init(apiKey);
        expect(result).toBe('user-ok');
        const devices = yield wrapper.getDeviceList();
        expect(devices).toBeInstanceOf(Object);
        expect(Object.keys(devices).length).toBeGreaterThan(0);
    }));
});
