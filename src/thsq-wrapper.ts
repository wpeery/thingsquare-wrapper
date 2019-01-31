import * as thsq from 'thsq';
import { Device, Devices, Attribute } from './index';

class ThsqWrapper {
  private thsq : thsq;

  public constructor() {
    this.thsq = thsq;
  }

  public disconnectFromServer() : void {
    this.thsq.destroy();
  }

  public async init(apiKey : string) : Promise<Devices> {
    let promise : Promise<Devices>;
    promise = new Promise(resolve => this.thsq.init({ token: apiKey }, resolve));
    const result = await promise;
    if (result === undefined) {
      throw new Error('API key is incorrect');
    }
    return result;
  }

  public async getDevice(unique : Attribute) : Promise<Device> {
    return new Promise(resolve => this.thsq.getDevice(unique, resolve));
  }

  public async getDeviceList() : Promise<Devices> {
    return new Promise(resolve => this.thsq.getDevicelist(resolve));
  }

  public async getVariable(unique : string,
                           variableType : string,
                           variableName : string) : Promise<Attribute> {

    return new Promise(resolve => this.thsq.getVariable(unique,
                                                        variableType,
                                                        variableName,
                                                        resolve));
  }

  public async getVariableHistory(unique : string,
                                  variableType : string,
                                  variableName : string,
                                  options : object) : Promise<Attribute> {
    return new Promise(resolve => this.thsq.getVariable(unique,
                                                        variableType,
                                                        variableName,
                                                        resolve));
  }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
