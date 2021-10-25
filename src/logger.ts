export class Logger {
  private enableLog: boolean;

  constructor(enableLog: boolean = false) {
    this.enableLog = enableLog;
  }

  debug(message: any) {
    if (!this.enableLog) return;
    console.info(message);
  }

  error(message: any) {
    if (!this.enableLog) return;
    console.error(message);
  }
}
