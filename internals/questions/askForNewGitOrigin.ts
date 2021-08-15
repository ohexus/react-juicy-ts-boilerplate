/* eslint-disable @typescript-eslint/no-unsafe-assignment,
                  @typescript-eslint/no-unsafe-call,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/no-unsafe-return */
import inquirer from 'inquirer';

import QUESTION_MESSAGES from './QuestionMessages';

const {
  GIT: { NEW_ORIGIN: NEW_ORIGIN_MESSAGE },
} = QUESTION_MESSAGES;

const newGitOriginQuestion = {
  message: `${NEW_ORIGIN_MESSAGE}:`,
  name: 'gitOrigin',
  type: 'input',
};

export default async function askForNewGitOrigin(): Promise<string | undefined> {
  const origin = (await inquirer.prompt([newGitOriginQuestion])).gitOrigin.trim();

  return origin?.length ? origin : undefined;
}
