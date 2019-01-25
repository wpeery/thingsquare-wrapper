import * as thsq from 'thsq';

class ThsqWrapper {
  private thsq : thsq;

  public constructor() {
    this.thsq = thsq;
  }

  public disconnectFromServer() : void {
    this.thsq.destroy();
  }

  public async init(apiKey : string) : Promise<any> {
    const promise = new Promise(resolve => this.thsq.init({ token: apiKey }, resolve));
    const result : object = await promise.then(devices => devices);
    if (result === undefined) {
      throw new Error('API key is incorrect');
    }
    return result;
  }

  public async initWithoutKey() : Promise<any> {
    const promise = new Promise(resolve => this.thsq.init(resolve));
    const result : object = await promise.then(devices => devices);
    if (result === undefined) {
      throw new Error('Error initalizing ThsqWrapper');
    }
    return result;
  }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
