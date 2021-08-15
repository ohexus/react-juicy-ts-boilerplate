export { default as execute } from './execute';
export {
  removeInternalDependencies,
  readFile,
  writeFile,
  removeDir,
  removeGitDir,
  removeInternalsDir,
} from './fs';
export { addAllToGitRepo, addNewOrigin, cleanRepo, createInitialCommit, initGitRepo } from './git';
export { updateIndexHtml, updatePackageJson, updateReadme, updateTsConfig } from './updateInfo';
