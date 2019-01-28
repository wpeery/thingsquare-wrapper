import * as thsq from 'thsq';
import { Device, Devices } from './index';

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
    const result = await promise.then(devices => devices);
    if (result === undefined) {
      throw new Error('API key is incorrect');
    }
    return result;
  }

  public async getDevice(unique : string) : Promise<Device> {
    const promise : Promise<Device> = new Promise(resolve => this.thsq.getDevice(unique, resolve));
    return await promise.then(device => device);
  }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
