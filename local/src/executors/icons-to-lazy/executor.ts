import { IconsToLazyExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';

export default async function runExecutor(options: IconsToLazyExecutorSchema) {
  const generateIconSet = options.generateIconSet ?? false;
  const iconSetNameFileName = options.iconSetNameFileName ?? 'icon-set';
  const iconSetNameExportName = options.iconSetNameExportName ?? 'ICONS_SET';
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
  const importsInIconsSet: string[] = [];
  const exportsInIconsSet: string[] = [];
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

    if (!exportName || !iconName) {
      console.log('Can not find export name in file:', file);
      continue;
    }

    // создать папку
    fs.mkdirSync(path.join(pathToFolder, iconName), 0o777);
    console.log('CREATE FOLDER:', path.join(pathToFolder, iconName));

    // переместить файл
    fs.renameSync(path.join(pathToFolder, file), path.join(pathToFolder, iconName, file));

    // создать ng-package.json
    const ngPackageJsonName = 'ng-package.json';
    fs.copyFileSync(
      path.join(__dirname, ngPackageJsonName),
      path.join(pathToFolder, iconName, ngPackageJsonName)
    );

    // создать index.ts
    // добавить в index.ts импорт
    const indexTsName = 'index.ts';
    fs.writeFileSync(path.join(pathToFolder, iconName, indexTsName), `export * from './${fileWithoutExt}';`);

    // add to lazy file
    const newPath = path.join(path.relative(destinationFolder, pathToFolder), iconName, fileWithoutExt);
    result.push(`'${iconName}': () => import('./${newPath}').then((r) => r['${exportName}'])`);

    if (generateIconSet) {
      importsInIconsSet.push(`import { ${exportName} } from './${iconName}/${fileWithoutExt}';`);
      exportsInIconsSet.push(exportName);
    }
  }

  if (generateIconSet) {
    console.log('Generating icon set...');
    const destinationIconSet = path.join(pathToFolder, `${iconSetNameFileName}.ts`);
    // generate complete icon set
    fs.writeFileSync(
      destinationIconSet,
      `
      ${importsInIconsSet.join('\n')}

    export const ${iconSetNameExportName} = [
       ${exportsInIconsSet.join(',\n')}
    ];
    `
    );
  }

  console.warn('FIXED NAMES:', fixedNames);
  console.warn('IMPORTS SKIPPED:', skipped);
  console.warn('IMPORTS ADDED:', result.length);

  // generate lazy load file with exports
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
