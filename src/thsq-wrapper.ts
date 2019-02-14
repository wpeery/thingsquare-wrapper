import axios from 'axios'
import { Device, Devices, Attribute } from './index';

const appKey = '0ac48bf3-9fab-4bad-8455-e394808eda6b'
const baseUrl = `https://${appKey}.developer.thingsquare.com`


class ThsqWrapper {
  private apiKey : string;
  private sessionCookie : string;


  public async init(apiKey : string) : Promise<string> {
    const completeUrl = `${baseUrl}/0/session/`;
    this.apiKey = apiKey;
    try {
      const response = await axios({
        url: completeUrl,
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        data: `token=${this.apiKey}`
      });
      this.sessionCookie = response.headers['set-cookie'];
      return response.data;
    }
    catch(e) {
      throw new Error(e.message + '\nAPI key might be incorrect');
    }
  }

  public async getDevice(id : string) : Promise<Device> {
    try {
      const response = await axios({
        url: `${baseUrl}/0/devices/${id}`,
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          Cookie: this.sessionCookie
        },
        data: `token=${this.apiKey}`
      });
      return response.data;
    }
    catch (e) {
      return undefined;
    }
  }

  public async getDeviceList() : Promise<Devices> {
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
// curl -c session.txt -X POST --data token=483568031efa40638872947df118d22a https://httpbin.org/post

// wget --keep-session-cookies --save-cookies cookies.txt https://0ac48bf3-9fab-4bad-8455-e394808eda6b.developer.thingsquare.com/0/session/ --post-data="token=483568031efa40638872947df118d22a"

// wget --keep-session-cookies --save-cookies cookies.txt https://httpbin.org/post --post-data="token=483568031efa40638872947df118d22a"

