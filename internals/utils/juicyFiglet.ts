import figlet from 'figlet';

import { printError, printMessage } from './print';

export default function juicyFiglet(): Promise<string> {
  return new Promise((resolve, reject) => {
    figlet.text(
      'Juicy Boilerplate',
      { font: 'Cyberlarge' },
      (err: Error | null, result?: string) => {
        if (err) {
          printError('Something went wrong...');
          reject(new Error(err.message));
        }
        if (result) {
          printMessage(result);
          resolve(result);
        }
      },
    );
  });
}
