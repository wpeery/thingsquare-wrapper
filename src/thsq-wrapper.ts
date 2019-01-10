import * as thsq from 'thsq';

class ThsqWrapper {
  private thsq: thsq;
  private apiKey: string = 'test_api_key_1234';

  public constructor() {
    this.thsq = thsq;
  }

  public initialize() : void {
    return this.thsq.init({ token: this.apiKey });
  }

}

export default new ThsqWrapper();
