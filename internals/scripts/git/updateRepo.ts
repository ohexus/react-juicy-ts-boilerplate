import { juicySpinner } from '../../utils';
import {
  addAllToGitRepo,
  addNewOrigin,
  cleanRepo,
  createInitialCommit,
  initGitRepo,
} from './actions';

export default async function updateRepo(origin?: string): Promise<void> {
  juicySpinner.start();

  await cleanRepo();
  await initGitRepo();

  juicySpinner.stop();

  await addAllToGitRepo();
  await createInitialCommit();

  if (origin) {
    await addNewOrigin(origin);
  }
}
