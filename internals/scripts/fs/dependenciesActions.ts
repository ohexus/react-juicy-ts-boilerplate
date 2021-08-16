import { juicySpinner, printError, printMessage } from '../../utils';
import execute from '../execute';

const INTERNAL_DEPENDENCIES = [
  '@types/clui',
  '@types/figlet',
  '@types/inquirer',
  '@types/node',
  'chalk',
  'clui',
  'figlet',
  'inquirer',
  'ts-node',
];

const MESSAGES = {
  START: 'Removing internal dependencies...',
  SUCCESS: 'Internal dependencies has been removed.',
};

export default async function removeInternalDependencies(): Promise<void> {
  juicySpinner.message(MESSAGES.START);

  await execute(`yarn remove ${INTERNAL_DEPENDENCIES.join(' ')}`)
    .then(() => printMessage(`\n${MESSAGES.SUCCESS}`))
    .catch((err) => printError(`\n${(err as Error).message}`));
}
