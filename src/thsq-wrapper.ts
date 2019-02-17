import axios from 'axios';
import { Device, Devices, Attribute } from './index';

const appKey = '0ac48bf3-9fab-4bad-8455-e394808eda6b';
const baseUrl = `https://${appKey}.developer.thingsquare.com`;

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
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        data: `token=${this.apiKey}`,
      });
      this.sessionCookie = response.headers['set-cookie'];
      return response.data;
    } catch (e) {
      throw new Error(`${e.message}\nAPI key might be incorrect`);
    }
  }

  public async getDevice(id : string) : Promise<Device> {
    try {
      const response = await axios({
        url: `${baseUrl}/0/devices/${id}`,
        method: 'get',
        headers: {
          Cookie: this.sessionCookie,
        },
      });
      return response.data;
    } catch (e) {
      return undefined;
    }
  }

  public async getDeviceList() : Promise<Devices> {
    const response = await axios({
      url: `${baseUrl}/0/devices/`,
      method: 'get',
      headers : {
        Cookie: this.sessionCookie,
      },
    });
    return response.data;
  }

  public async getVariable(id : string,
                           variableType : string,
                           variableName : string) : Promise<Attribute> {
    try {
      const response = await axios({
        url: `${baseUrl}/0/devices/${id}/${variableType}/${variableName}`,
        method: 'get',
        headers: {
          Cookie: this.sessionCookie,
        },
      });
      return response.data;
    } catch (e) {
      return undefined;
    }
  }

  public async getVariableHistory(id : string,
                                  variableType : string,
                                  variableName : string,
                                  numDataPoints : string) : Promise<Attribute[]> {
    try {
      const response = await axios({
        url: `${baseUrl}/0/devices/${id}/${variableType}/${variableName}?latest=${numDataPoints}`,
        method: 'get',
        headers: {
          Cookie: this.sessionCookie,
        },
      });
      return (response.data.length ? response.data : undefined);
    } catch (e) {
      return undefined;
    }
  }

}

export const thsqWrapperFactory = () => { return new ThsqWrapper(); };
