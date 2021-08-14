import fs from 'fs';
import path from 'path';

export function removeDir(dir: string): Promise<void> {
  return new Promise((resolve) => {
    fs.rm(dir, { recursive: true }, (error) => {
      if (error) {
        throw error;
      }
      resolve();
    });
  });
}

export async function removeGitDir(): Promise<void> {
  await removeDir(path.resolve(__dirname, '../../../.git/'));
}

export async function removeInternalsDir(): Promise<void> {
  await removeDir(path.resolve(__dirname, '../../../internals/'));
}
