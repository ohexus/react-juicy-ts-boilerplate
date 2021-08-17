import setup from './setup';
import { juicyFiglet, printError } from './utils';

function clearTerminal(): void {
  process.stdout.write('\x1b[2J');
  process.stdout.write('\x1b[0f');
}

(async () => {
  clearTerminal();
  await juicyFiglet();
  await setup();
  process.exit(0);
})().catch((err) => {
  printError(err);
  process.exit(1);
});
