import { askForNewGitOrigin, askForNewProjectName } from './questions';
import {
  addAllToGitRepo,
  addNewOrigin,
  cleanRepo,
  createInitialCommit,
  initGitRepo,
  removeInternalDependencies,
  removeInternalsDir,
  updateIndexHtml,
  updatePackageJson,
  updateReadme,
  updateTsConfig,
} from './scripts';
import { chalkColored, juicySpinner, printBasicMessage, printMessage } from './utils';

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

  juicySpinner.start();

  await Promise.all([
    updateIndexHtml(name),
    updatePackageJson(name),
    updateTsConfig(),
    updateReadme(name),
  ]);

  await removeInternalDependencies();
  await removeInternalsDir();

  await cleanRepo();
  await initGitRepo();
  await addAllToGitRepo();
  await createInitialCommit();

  const origin = await askForNewGitOrigin();

  if (origin) {
    await addNewOrigin(origin);
  }

  juicySpinner.stop();

  printMessage(MESSAGES.FINAL);
  printBasicMessage(MESSAGES.SCRIPTS_OVERVIEW);
}
