import path from 'path';

import { juicySpinner, printError, printMessage } from '../../utils';
import { readFile, writeFile } from '../fs';
import { UPDATE_MESSAGES } from './consts';

const TS_CONFIG_PATH = path.resolve(__dirname, '../../../tsconfig.json');

const { TSCONFIG: MESSAGES } = UPDATE_MESSAGES;

interface TsConfigJson {
  [key: string]: unknown;
  'compilerOptions': Record<string, unknown>;
  'exclude': string[];
  'include': string[];
  'ts-node'?: Record<string, unknown>;
}

export default async function updateTsConfig(): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  const tsConfigJson = await readFile(TS_CONFIG_PATH)
    .then((data) => JSON.parse(data) as TsConfigJson)
    .catch((err) => {
      printError(err);
      return undefined;
    });

  if (tsConfigJson) {
    delete tsConfigJson['ts-node'];
    tsConfigJson.include = tsConfigJson.include.filter(
      (includePath) => !includePath.includes('internals'),
    );

    await writeFile(TS_CONFIG_PATH, JSON.stringify(tsConfigJson, null, 2));

    printMessage(MESSAGES.SUCCESS);
  }
}
