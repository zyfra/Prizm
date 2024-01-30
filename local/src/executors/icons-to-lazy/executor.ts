import { IconsToLazyExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';

export default async function runExecutor(options: IconsToLazyExecutorSchema) {
  const destinationFile = path.join(__dirname, '../../../../', options.pathToOutputFile);
  const destinationFolder = destinationFile.split('/').slice(0, -1).join('/');
  const pathToFolder = path.join(__dirname, '../../../../', options.pathToFolder);
  const exportConstName = options.exportName || 'PRIZM_LAZY_ICONS_SET';
  if (!fs.existsSync(pathToFolder)) {
    return {
      success: false,
    };
  }

  const files = fs.readdirSync(pathToFolder);

  if (!files.length) {
    return {
      success: false,
    };
  }

  const result: string[] = [];
  let skipped = 0;

  for (const file of files) {
    if (options.prefix && !file.toLowerCase().startsWith(options.prefix.toLowerCase())) {
      console.warn('SKIP FILE:', file);
      skipped++;
      continue;
    }
    const fileWithoutExt = file.split('.').slice(0, -1).join('.');
    const content = fs.readFileSync(path.join(pathToFolder, file)).toString();
    const newPath = path.join(path.relative(destinationFolder, pathToFolder), fileWithoutExt);
    const exportName = /export const ([^:]+)/g.exec(content)?.[1];
    result.push(`'${exportName}': () => import('./${newPath}').then((r) => r['${exportName}'])`);
  }

  console.warn('IMPORTS SKIPPED:', skipped);
  console.warn('IMPORTS ADDED:', result.length);

  fs.writeFileSync(
    destinationFile,
    `export const ${exportConstName} = {
     ${result.join(',\n')}
}`
  );

  return {
    success: true,
  };
}
