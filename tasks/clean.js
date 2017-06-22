import gitignoreClean from '../src/gitignore-clean';
import projPath from 'proj-path';
import path from 'path';

export default async function clean() {
  await gitignoreClean(path.resolve(projPath(), '.gitignore'), [ 'node_modules/' ]);
}
