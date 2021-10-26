import { UserService } from './user';

describe('UserService', () => {
  const userService = new UserService({ enableLog: true });

  describe('getUsers', () => {
    it('should return value', async () => {
      const result = await userService.getUsers();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.status).toStrictEqual(200);
      expect(result.isSuccess).toBeTruthy();
    });
  });
});
