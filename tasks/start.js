import childProcess from 'child_process';
import doTask from 'do-task';
import clean from './clean';

export default async function start() {
  await doTask(clean);
}
