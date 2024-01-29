import { IconsToLazyExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';

export default async function runExecutor(options: IconsToLazyExecutorSchema) {
  console.log('Executor ran for IconsToLazy', options);

  const pathToFolder = path.join(__dirname, '../../../../../', options.pathToFolder);
  console.log('#mz a', 1, pathToFolder);

  if (!fs.existsSync(pathToFolder)) {
    return {
      success: false,
    };
  }

  console.log('#mz a', 2, pathToFolder);
  const files = fs.readdirSync(path.join('../../../../../', __dirname, options.pathToFolder));

  if (!files.length) {
    return {
      success: false,
    };
  }

  const result: string[] = [];

  for (const file of files) {
    console.log('#mz file', file);
    const name = file;
    const exportName = '';
    result.push(`
      '${name}': () => import().then((r) => r.${exportName})
   `);
  }

  return {
    success: true,
  };
}
