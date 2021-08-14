import { exec, ExecException } from 'child_process';

export default function execute(command: string): Promise<string> {
  return new Promise((resolve) => {
    exec(command, (error: ExecException | null, stdout: string, stderr: string): void => {
      if (error && stderr) {
        throw new Error(stderr);
      }

      resolve(stdout);
    });
  });
}
