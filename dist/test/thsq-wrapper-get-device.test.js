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
describe('test the getDevice function', () => __awaiter(this, void 0, void 0, function* () {
    test('device exists', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const id = 'd7dbb9d0-2261-4324-823d-b61352eb1cd2';
        const device = yield wrapper.getDevice(id);
        expect(device).toBeInstanceOf(Object);
    }));
    test('device does not exist', () => __awaiter(this, void 0, void 0, function* () {
        expect.assertions(1);
        const unique = 'f';
        const device = yield wrapper.getDevice(unique);
        expect(device).toBe(undefined);
    }));
}));
