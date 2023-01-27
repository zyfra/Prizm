import { ExecutorContext } from '@nrwl/devkit';
import { exec } from 'child_process';
import { promisify } from 'util';

export interface CompodocExecutorOptions {
  tsConfigPath: string;
  distPath: string;
}

export default async function compodocExecutor(options: CompodocExecutorOptions, context: ExecutorContext) {
  console.info(`Executing "compodoc"...`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);

  const { stdout, stderr } = await promisify(exec)(
    `npx compodoc -p ${options.tsConfigPath} --exportFormat json -d ${options.distPath}`
  );
  console.log(stdout);
  console.error(stderr);

  const success = !stderr;
  return { success };
}
