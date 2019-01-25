import * as thsq from 'thsq';

class ThsqWrapper {
  private thsq : thsq;

  public constructor() {
    this.thsq = thsq;
  }

  public disconnectFromServer() : void {
    this.thsq.destroy();
  }

  public init(apiKey : string) : Promise<any> {
    return new Promise(resolve => this.thsq.init({ token: apiKey }, resolve));
  }

  public initWithoutKey() : Promise<any> {
    return new Promise(resolve => this.thsq.init(resolve));
  }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
