/* eslint-disable @typescript-eslint/no-unsafe-assignment,
                  @typescript-eslint/no-unsafe-call,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/no-unsafe-return */
import inquirer from 'inquirer';

import QUESTION_MESSAGES from './QuestionMessages';
import { gitUrlValidator } from './validators';

const {
  GIT: { INVALID_ORIGIN: INVALID_ORIGIN_MESSAGE, NEW_ORIGIN: NEW_ORIGIN_MESSAGE },
} = QUESTION_MESSAGES;

const newGitOriginQuestion = {
  message: `${NEW_ORIGIN_MESSAGE}:`,
  name: 'gitOrigin',
  type: 'input',
};

const invalidGitOriginQuestion = {
  message: `${INVALID_ORIGIN_MESSAGE}:`,
  name: 'confirmed',
  type: 'confirm',
};

export default async function askForNewGitOrigin(): Promise<string | undefined> {
  const origin = (await inquirer.prompt([newGitOriginQuestion])).gitOrigin.trim();

  let confirmed = true;

  if (!gitUrlValidator(origin.trim())) {
    confirmed = (await inquirer.prompt([invalidGitOriginQuestion])).confirmed;
  }

  return confirmed && origin?.length ? origin : undefined;
}
