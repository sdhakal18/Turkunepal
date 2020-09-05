import { AxiosError, AxiosRequestConfig } from 'axios';
import * as axios from 'axios';
import { LoginCredentials, UserProfile } from '../types';
import { apiEndpoints } from './urls';
import injectMockApi from './mockApi';

export class Api {
  private readonly axios: axios.AxiosInstance;

  constructor() {
    const baseURL: string | undefined = process.env.REACT_APP_API_URL;

    this.axios = axios.default.create({ baseURL });

    if (baseURL === undefined) {
      injectMockApi(this.axios);
    }
  }

  public fetchUserProfile(): Promise<UserProfile> {
    return this._fetch(apiEndpoints.userProfile);
  }

  public postLogin(data: LoginCredentials): Promise<UserProfile> {
    return this._post(apiEndpoints.login, data);
  }

  private _fetch(endpoint: string, params?: any): Promise<any> {
    return this.axios
      .get(endpoint, { params })
      .then((res) => res.data)
      .catch((err) => this._navigateToMaintenancePage(err));
  }

  private _post(
    endpoint: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    return this.axios
      .post(endpoint, data, config)
      .then((res) => res.data)
      .catch((err) => this._navigateToMaintenancePage(err));
  }

  private _navigateToMaintenancePage(axiosError: AxiosError): Promise<any> {
    if (axiosError.response && axiosError.response.status === 503) {
      // history.replace(
      //     urlConfig.maintenance +
      //     "?data=" +
      //     JSON.stringify(axiosError.response.data || ""),
      // );
    }
    throw axiosError;
  }
}

const api = new Api();

export default api;
