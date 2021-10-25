import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { DEFAULT_CONFIG, HTTP_STATUS, IConfig, IErrorResponse, IFriendlyResponse } from '../common';
import { Logger } from '../logger';

export class BaseService {
  protected baseUrl: string;

  protected logger: Logger;

  protected instance: AxiosInstance;

  // eslint-disable-next-line max-len
  constructor({ baseUrl = DEFAULT_CONFIG.BASE_URL, enableLog = DEFAULT_CONFIG.ENABLE_LOG }: IConfig) {
    this.baseUrl = baseUrl;
    this.logger = new Logger(enableLog);
    this.instance = Axios.create({
      baseURL: baseUrl,
    });
  }

  protected getUserAgent(): string {
    return 'Hugo-NodeJS-SDK HTTP/1.1 v0.0.1';
  }

  protected makeHeaders(configHeaders: Record<string, any> = {}) {
    const headers: Record<string, any> = {
      'Content-type': 'application/json; charset=UTF-8',
      'User-Agent': this.getUserAgent(),
    };

    Object.keys(configHeaders).forEach((key: string) => {
      headers[key] = configHeaders[key];
    });

    return headers;
  }

  protected makeFriendLyResponse<T>(response: AxiosResponse<T, any>): IFriendlyResponse<T> {
    const { status, data, headers } = response;

    this.logger.debug(response);

    return {
      status,
      data,
      headers,
      isSuccess: true,
    };
  }

  protected makeErrorFriendLyResponse(error: any): IFriendlyResponse<IErrorResponse> {
    const status = error.response?.status ?? HTTP_STATUS.BAD_GATEWAY;
    const headers = error.response?.headers ?? {};
    const data = {
      message: error.response?.data?.message || error.message || 'unknown',
      errorCode: error.response?.data?.errorCode || 'UN_KNOWN',
    };

    this.logger.error(error);

    return {
      status,
      data,
      headers,
      isSuccess: false,
    };
  }
}
