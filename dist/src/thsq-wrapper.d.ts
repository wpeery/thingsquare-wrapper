import { Device, Devices, Attribute } from '../../src/index';
export declare class ThsqWrapper {
    private apiKey;
    private sessionCookie;
    init(apiKey: string): Promise<string>;
    getDevice(id: string): Promise<Device>;
    getDeviceList(): Promise<Devices>;
    getVariable(id: string, variableType: string, variableName: string): Promise<Attribute>;
    getVariableHistory(id: string, variableType: string, variableName: string, numDataPoints: string): Promise<Attribute[]>;
}
export declare const thsqWrapperFactory: () => ThsqWrapper;
export { Device, Devices, Attribute } from '../../src/index';