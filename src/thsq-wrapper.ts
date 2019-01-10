import * as thsq from 'thsq';

class ThsqWrapper {
  private thsq: thsq;

  public constructor(apiKey : string) {
    this.thsq = thsq;
    this.initialize_thsq(apiKey);
  }

  public initialize_thsq(apiKey : string) : void {
    return this.thsq.init({ token: apiKey });
  }

}

export default (apiKey : string) => { return new ThsqWrapper(apiKey); };
