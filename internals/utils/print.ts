/* eslint-disable no-console */
import chalkColored from './chalkColored';

export function printBasicMessage(message: string): void {
  if (message.length) {
    console.log(message);
  }
}

export function printError(error: Error | string = ''): void {
  const message = typeof error === 'object' && 'message' in error ? error.message : error;

  if (message.length) {
    console.log(chalkColored(message, 'Red'));
  }
}

export function printMessage(message: string): void {
  if (message.length) {
    console.log(chalkColored(message, 'Cyan'));
  }
}
