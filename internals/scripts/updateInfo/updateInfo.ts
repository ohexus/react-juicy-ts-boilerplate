import { juicySpinner } from '../../utils';
import updateIndexHtml from './updateIndexHtml';
import updatePackageJson from './updatePackageJson';
import updateReadme from './updateReadme';
import updateTsConfig from './updateTsConfig';

export default async function updateInfo(name: string, origin?: string): Promise<void> {
  juicySpinner.start();

  await Promise.all([
    updateIndexHtml(name),
    updatePackageJson(name, origin),
    updateReadme(name),
    updateTsConfig(),
  ]);

  juicySpinner.stop();
}
