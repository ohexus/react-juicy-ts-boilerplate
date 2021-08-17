import { juicySpinner, printError, printNewLineMessage } from '../../utils';
import execute from '../execute';
import { removeGitDir } from '../fs';

const MESSAGES = {
  FIRST_COMMIT: 'Initialized project using Juicy Boilerplate',
  INITIALIZE: 'Initialising new repository...',
  NOT_REPO: 'Not a git repository.',
  REMOVE_START: 'Removing current repository...',
  REMOVE_SUCCESS: 'Current repository has been removed.',
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

async function executeGitCommand(input: string): Promise<void> {
  return execute(input)
    .then((stdout) => printNewLineMessage(stdout))
    .catch((err) => printError(err));
}

export async function cleanRepo(): Promise<void> {
  return isGitRepo()
    .then(async () => {
      juicySpinner.message(MESSAGES.REMOVE_START);

      await removeGitDir();

      printNewLineMessage(MESSAGES.REMOVE_SUCCESS);
    })
    .catch((err) => printError(err));
}

export async function initGitRepo(): Promise<void> {
  juicySpinner.message(MESSAGES.INITIALIZE);

  return executeGitCommand('git init');
}

export async function addAllToGitRepo(): Promise<void> {
  return executeGitCommand('git add .');
}

export async function createInitialCommit(): Promise<void> {
  return executeGitCommand(`git commit -m "${MESSAGES.FIRST_COMMIT}"`);
}

export async function addNewOrigin(url: string): Promise<void> {
  return executeGitCommand(`git remote add origin ${url}`);
}
