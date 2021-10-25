import { IConfig } from './common';
import { UserService } from './services/user';

export class Sdk {
  public userService: UserService;

  constructor(config: IConfig) {
    this.userService = new UserService(config);
  }
}
