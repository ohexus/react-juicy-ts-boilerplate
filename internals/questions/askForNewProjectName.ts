/* eslint-disable @typescript-eslint/no-unsafe-call,
                  @typescript-eslint/no-unsafe-member-access,
                  @typescript-eslint/no-unsafe-return */
import inquirer from 'inquirer';

import QUESTIONS from './Questions';

const {
  PROJECT: { INVALID_NAME: INVALID_NAME_MESSAGE, NEW_NAME: NEW_NAME_MESSAGE },
} = QUESTIONS;

const newProjectNameQuestion = {
  message: `${NEW_NAME_MESSAGE}:`,
  name: 'projectName',
  type: 'input',
  validate: (name: string) => {
    if (name.trim().length) {
      return true;
    }
    return INVALID_NAME_MESSAGE;
  },
};

export default async function askForNewProjectName(): Promise<string> {
  return (await inquirer.prompt([newProjectNameQuestion])).projectName.trim();
}
