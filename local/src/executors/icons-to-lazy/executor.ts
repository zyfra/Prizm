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

  const fixedNames: string[] = [];
  for (const file of files) {
    if (options.prefix && !file.toLowerCase().startsWith(options.prefix.toLowerCase())) {
      console.warn('SKIP FILE:', file);
      skipped++;
      continue;
    }
    const fileWithoutExt = file.split('.').slice(0, -1).join('.');
    let content = fs.readFileSync(path.join(pathToFolder, file)).toString();
    const newPath = path.join(path.relative(destinationFolder, pathToFolder), fileWithoutExt);

    /* fix names kebab between text + number (v1 > v-1) */
    if (content) {
      const matches = content.matchAll(/name: '[^']+([a-zA-Z]+-[0-9]+)'/g);
      if (matches)
        for (const match of matches) {
          const oldPart = match[1];
          const newPath = match[1].replace(/-/g, '');

          const changedPart = match[0].replace(oldPart, newPath);

          content = content.replaceAll(match[0], changedPart);

          fs.writeFileSync(path.join(pathToFolder, file), content);
          fixedNames.push(`${oldPart}>${newPath}`);
        }
    }

    const exportName = /export const ([^:]+)/g.exec(content)?.[1];
    const iconName = /name: '([^']+)'/g.exec(content)?.[1];

    result.push(`'${iconName}': () => import('./${newPath}').then((r) => r['${exportName}'])`);
  }

  console.warn('FIXED NAMES:', fixedNames);
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
