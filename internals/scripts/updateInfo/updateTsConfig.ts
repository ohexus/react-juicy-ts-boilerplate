import path from 'path';

import { juicySpinner, printMessage } from '../../utils';
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

  const tsConfigJson = JSON.parse(await readFile(TS_CONFIG_PATH)) as TsConfigJson;

  delete tsConfigJson['ts-node'];
  tsConfigJson.include = tsConfigJson.include.filter(
    (includePath) => !includePath.includes('internals'),
  );

  await writeFile(TS_CONFIG_PATH, JSON.stringify(tsConfigJson, null, 2));

  printMessage(MESSAGES.SUCCESS);
}
