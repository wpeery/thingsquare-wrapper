import axios from 'axios'
axios.defaults.withCredentials = true;
import { Device, Devices, Attribute } from './index';

const appKey = '0ac48bf3-9fab-4bad-8455-e394808eda6b'
const baseUrl = `https://${appKey}.developer.thingsquare.com`


class ThsqWrapper {
  private apiKey : string;
  private sessionCookie : string;


  public async init(apiKey : string) : Promise<string> {
    const completeUrl2 = `${baseUrl}/0/session/`;
    this.apiKey = apiKey;
    const response = await axios.post(completeUrl2, {
      form: {
        token: this.apiKey
      },
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    if (response.data != 'user-ok') {
      throw new Error('API key is incorrect');
    }
    this.sessionCookie = response.headers['set-cookie'];
    console.log(this.sessionCookie);
    return response.data;
  }

  // public async getDevice(unique : string) : Promise<Device> {
  //   return new Promise(resolve => this.thsq.getDevice(unique, resolve));
  // }

  public async getDeviceList() : Promise<any> {
    const url = `${baseUrl}/0/devices/`
    const response = await axios.get(url, {
      headers : {
        Cookie: this.sessionCookie
      }
    });
    return response.data;
  }

  // public async getVariable(unique : string,
  //                          variableType : string,
  //                          variableName : string) : Promise<Attribute> {

  //   return new Promise(resolve => this.thsq.getVariable(unique,
  //                                                       variableType,
  //                                                       variableName,
  //                                                       resolve));
  // }

  // public async getVariableHistory(unique : string,
  //                                 variableType : string,
  //                                 variableName : string,
  //                                 options : object) : Promise<Attribute> {
  //   return new Promise(resolve => this.thsq.getVariable(unique,
  //                                                       variableType,
  //                                                       variableName,
  //                                                       resolve));
  // }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
// curl -c session.txt -X POST --data token=483568031efa40638872947df118d22a https://0ac48bf3-9fab-4bad-8455-e394808eda6b.developer.thingsquare.com/0/session/
// curl -b session.txt https://0ac48bf3-9fab-4bad-8455-e394808eda6b.developer.thingsquare.com/0/devices/
