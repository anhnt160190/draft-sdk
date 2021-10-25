import { IConfig } from '../common';
import { BaseService } from './base';

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}

export class UserService extends BaseService {
  constructor(config: IConfig) {
    super(config);
  }

  async getUsers() {
    const headers = this.makeHeaders();
    try {
      const response = await this.instance.get<IUser[]>('/users', {
        headers,
      });
      return this.makeFriendLyResponse(response);
    } catch (error) {
      this.logger.error(error);
      return this.makeErrorFriendLyResponse(error);
    }
  }
}
