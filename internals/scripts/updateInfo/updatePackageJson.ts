import path from 'path';

import { juicySpinner, printError, printMessage } from '../../utils';
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

function updateGitRepoInfo(packageJson: PackageJson, origin?: string): PackageJson {
  const updatedPackageJson = packageJson;

  delete updatedPackageJson.bugs;
  delete updatedPackageJson.homepage;

  if (origin) {
    updatedPackageJson.repository = {
      type: 'git',
      url: origin,
    };
  } else {
    delete updatedPackageJson.repository;
  }

  return updatedPackageJson;
}

export default async function updatePackageJson(name: string, gitOrigin?: string): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  let packageJson = await readFile(PKG_PATH)
    .then((data) => JSON.parse(data) as PackageJson)
    .catch((err) => {
      printError(err);
      return undefined;
    });

  if (packageJson) {
    packageJson.name = name.replace(' ', '-');
    packageJson.version = '0.1.0';

    delete packageJson.author;
    delete packageJson.description;
    delete packageJson.scripts.presetup;
    delete packageJson.scripts.setup;

    packageJson = updateGitRepoInfo(packageJson, gitOrigin);

    await writeFile(PKG_PATH, JSON.stringify(packageJson, null, 2));

    printMessage(MESSAGES.SUCCESS);
  }
}
