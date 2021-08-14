import path from 'path';

import { juicySpinner, printMessage } from '../../utils';
import { readFile, writeFile } from '../fs';
import { PLACEHOLDER_REGEX, UPDATE_MESSAGES } from './consts';

const { README: MESSAGES } = UPDATE_MESSAGES;

export default async function updateReadme(name: string): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  const readme = await readFile(path.resolve(__dirname, './newReadme.md'));

  if (readme) {
    const newReadme = readme.replace(PLACEHOLDER_REGEX, name);

    await writeFile(path.resolve(__dirname, '../../../README.md'), newReadme);

    printMessage(MESSAGES.SUCCESS);
  }
}
