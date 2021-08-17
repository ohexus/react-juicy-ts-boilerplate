import { askForNewGitOrigin, askForNewProjectName } from './questions';
import { updateInternals, updateRepo, updateInfo } from './scripts';
import { chalkColored, printBasicMessage, printMessage } from './utils';

const MESSAGES = {
  FINAL: 'Project initialized.',
  SCRIPTS_OVERVIEW: `
Now you can run these commands:
  ${chalkColored('yarn start', 'Cyan')}
    Starts the development server.
    Open ${chalkColored('http://localhost:9000', 'Cyan')} to view it in the browser.

  ${chalkColored('yarn test', 'Cyan')}
    Starts the tests.

  ${chalkColored('yarn build', 'Cyan')}
    Bundles the app into static files for production.

  ${chalkColored('yarn lint', 'Cyan')}
    Lints the app and shows errors and warnings in console.
`,
};

export default async function setup(): Promise<void> {
  const name = await askForNewProjectName();
  const origin = await askForNewGitOrigin();

  await updateInfo(name, origin);
  await updateInternals();
  await updateRepo(origin);

  printMessage(MESSAGES.FINAL);
  printBasicMessage(MESSAGES.SCRIPTS_OVERVIEW);
}
