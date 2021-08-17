/* eslint-disable @typescript-eslint/no-unsafe-call,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/no-unsafe-return */
import inquirer from 'inquirer';
import { printBasicMessage } from '../utils';

import QUESTION_MESSAGES from './QuestionMessages';
import { lengthValidator } from './validators';

const {
  PROJECT: {
    INVALID_NAME: INVALID_NAME_MESSAGE,
    NEW_NAME: NEW_NAME_MESSAGE,
    PACKAGE_JSON_NAME: PACKAGE_JSON_NAME_MESSAGE,
  },
} = QUESTION_MESSAGES;

const newProjectNameQuestion = {
  message: `${NEW_NAME_MESSAGE}:`,
  name: 'projectName',
  type: 'input',
  validate: (name: string) => lengthValidator(name, INVALID_NAME_MESSAGE),
};

export default async function askForNewProjectName(): Promise<string> {
  printBasicMessage(PACKAGE_JSON_NAME_MESSAGE);
  return (await inquirer.prompt([newProjectNameQuestion])).projectName.trim();
}
