import { juicySpinner, printMessage } from '../../utils';
import execute from '../execute';
import { removeGitDir } from '../fs';

const MESSAGES = {
  FIRST_COMMIT: 'Initialized project using Juicy Boilerplate',
  INITIALIZE: 'Initialising new repository...',
  NOT_REPO: 'Not a git repository.',
  REMOVE_START: 'Removing current repository...',
  REMOVE_SUCCESS: 'Current repository have been removed.',
  REPO_NOT_CHANGED: 'Left the existing repo.',
};

const IS_GIT_REPO_REGEX = /fatal:\s+Not\s+a\s+git\s+repository/i;

async function isGitRepo(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    execute('git status')
      .then((stdout) => {
        if (IS_GIT_REPO_REGEX.test(stdout)) {
          reject(new Error(MESSAGES.NOT_REPO));
        }
        resolve(true);
      })
      .catch(() => reject(new Error(MESSAGES.NOT_REPO)));
  });
}

export async function cleanRepo(): Promise<void> {
  if (await isGitRepo()) {
    juicySpinner.message(MESSAGES.REMOVE_START);

    await removeGitDir();

    printMessage(`\n${MESSAGES.REMOVE_SUCCESS}`);
  }
}

export function initGitRepo(): Promise<string> {
  printMessage(MESSAGES.INITIALIZE);
  return execute('git init');
}

export function addAllToGitRepo(): Promise<string> {
  return execute('git add .');
}

export function createInitialCommit(): Promise<string> {
  return execute(`git commit -m "${MESSAGES.FIRST_COMMIT}"`);
}

export function addNewOrigin(url: string): Promise<string> {
  return execute(`git remote add origin ${url}`);
}
