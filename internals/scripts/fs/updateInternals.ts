import { juicySpinner } from '../../utils';
import removeInternalDependencies from './dependenciesActions';
import { removeInternalsDir } from './removeDirs';

export default async function updateInternals(): Promise<void> {
  juicySpinner.start();

  await removeInternalDependencies();
  await removeInternalsDir();

  juicySpinner.stop();
}
