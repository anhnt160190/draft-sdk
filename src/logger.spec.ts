import { Logger } from './logger';

describe('logger', () => {
  const logger1 = new Logger(true);
  const logger2 = new Logger(false);

  beforeEach(() => {
    console.info = jest.fn();
    console.error = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('debug', () => {
    it('should return undefined', () => {
      const result = logger2.debug('debug message');
      expect(result).toBeUndefined();
    });

    it('should log info', () => {
      logger1.debug('debug message');
      expect(console.info).toBeCalledWith('debug message');
    });
  });

  describe('error', () => {
    it('should return undefined', () => {
      const result = logger2.error('error message');
      expect(result).toBeUndefined();
    });

    it('should log error', () => {
      logger1.error('error message');
      expect(console.error).toBeCalledWith('error message');
    });
  });
});
