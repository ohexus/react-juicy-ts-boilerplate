import fs from 'fs';

const ERROR = {
  DATA_NOT_PROVIDED: 'Data should be provided!',
  PATH_NOT_PROVIDED: 'Path should be provided!',
};

export function readFile(path: string): Promise<string> {
  return new Promise((resolve) => {
    if (!path) {
      throw new Error(ERROR.PATH_NOT_PROVIDED);
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  });
}

export function writeFile(path: string, data: string): Promise<void> {
  return new Promise((resolve) => {
    if (!path) {
      throw new Error(ERROR.PATH_NOT_PROVIDED);
    }

    if (!data) {
      throw new Error(ERROR.DATA_NOT_PROVIDED);
    }

    fs.writeFile(path, data, (err) => {
      if (err) {
        throw err;
      }

      resolve();
    });
  });
}
