import { exec, ExecException } from 'child_process';

import { printError } from '../utils';

export default function execute(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error: ExecException | null, stdout: string, stderr: string): void => {
      if (error && stderr) {
        printError(stderr);
        reject(error);
      }

      resolve(stdout);
    });
  });
}
