import path from 'path';

import { juicySpinner, printMessage } from '../../utils';
import { readFile, writeFile } from '../fs';
import { UPDATE_MESSAGES } from './consts';

const PKG_PATH = path.resolve(__dirname, '../../../package.json');

const { PACKAGE: MESSAGES } = UPDATE_MESSAGES;

interface PackageJson {
  [key: string]: unknown;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  name: string;
  scripts: Record<string, string>;
  version: string;
}

export default async function updatePackageJson(name: string): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  const packageJson = JSON.parse(await readFile(PKG_PATH)) as PackageJson;

  packageJson.name = name.replace(' ', '-');
  packageJson.version = '0.1.0';
  delete packageJson.author;
  delete packageJson.bugs;
  delete packageJson.description;
  delete packageJson.homepage;
  delete packageJson.repository;
  delete packageJson.scripts.presetup;
  delete packageJson.scripts.setup;

  await writeFile(PKG_PATH, JSON.stringify(packageJson, null, 2));

  printMessage(MESSAGES.SUCCESS);
}
