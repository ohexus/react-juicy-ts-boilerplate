import path from 'path';

import { juicySpinner, printError, printMessage } from '../../utils';
import { readFile, writeFile } from '../fs';
import { PLACEHOLDER_REGEX, UPDATE_MESSAGES } from './consts';

const { HTML: MESSAGES } = UPDATE_MESSAGES;

const INDEX_HTML_PATH = path.resolve(__dirname, '../../../src/index.html');

export default async function updateIndexHtml(name: string): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  const indexHtml = await readFile(INDEX_HTML_PATH).catch((err) => {
    printError(err);
    return undefined;
  });

  if (indexHtml) {
    const updatedIndexHtml = indexHtml.replace(PLACEHOLDER_REGEX, name);

    await writeFile(INDEX_HTML_PATH, updatedIndexHtml);

    printMessage(MESSAGES.SUCCESS);
  }
}
