/* eslint-disable no-shadow */
export const DEFAULT_CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  ENABLE_LOG: false,
};

export interface IConfig {
  baseUrl?: string;
  enableLog?: boolean;
}

export interface IFriendlyResponse<T> {
  status: number;
  data: T;
  headers: Record<string, any>;
  isSuccess: boolean;
}

export interface IErrorResponse {
  message: string;
  errorCode: string;
}

export const HTTP_STATUS = {
  BAD_GATEWAY: 502,
};
