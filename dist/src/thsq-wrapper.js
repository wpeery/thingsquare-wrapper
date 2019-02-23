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
const axios_1 = require("axios");
const appKey = '0ac48bf3-9fab-4bad-8455-e394808eda6b';
const baseUrl = `https://${appKey}.developer.thingsquare.com`;
class ThsqWrapper {
    init(apiKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const completeUrl = `${baseUrl}/0/session/`;
            this.apiKey = apiKey;
            try {
                const response = yield axios_1.default({
                    url: completeUrl,
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                    data: `token=${this.apiKey}`,
                });
                this.sessionCookie = response.headers['set-cookie'];
                return response.data;
            }
            catch (e) {
                throw new Error(`${e.message}\nAPI key might be incorrect`);
            }
        });
    }
    getDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default({
                    url: `${baseUrl}/0/devices/${id}`,
                    method: 'get',
                    headers: {
                        Cookie: this.sessionCookie,
                    },
                });
                return response.data;
            }
            catch (e) {
                return undefined;
            }
        });
    }
    getDeviceList() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default({
                url: `${baseUrl}/0/devices/`,
                method: 'get',
                headers: {
                    Cookie: this.sessionCookie,
                },
            });
            return response.data;
        });
    }
    getVariable(id, variableType, variableName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default({
                    url: `${baseUrl}/0/devices/${id}/${variableType}/${variableName}`,
                    method: 'get',
                    headers: {
                        Cookie: this.sessionCookie,
                    },
                });
                return response.data;
            }
            catch (e) {
                return undefined;
            }
        });
    }
    getVariableHistory(id, variableType, variableName, numDataPoints) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default({
                    url: `${baseUrl}/0/devices/${id}/${variableType}/${variableName}?latest=${numDataPoints}`,
                    method: 'get',
                    headers: {
                        Cookie: this.sessionCookie,
                    },
                });
                return (response.data.length ? response.data : undefined);
            }
            catch (e) {
                return undefined;
            }
        });
    }
}
exports.ThsqWrapper = ThsqWrapper;
exports.thsqWrapperFactory = () => { return new ThsqWrapper(); };
