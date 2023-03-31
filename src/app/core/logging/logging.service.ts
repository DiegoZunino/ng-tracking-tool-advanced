import { Injectable } from '@angular/core';

@Injectable(
  // { providedIn: 'root' }
)
export class LoggingService {

  private logs: string[] = []

  addLog(message: string) {
    this.logs.push(`${new Date().toLocaleTimeString()}: ${message}`);
  }

  consoleLogs() {
    console.log(this.logs);
  }
}
