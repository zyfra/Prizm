import { IconsToLazyExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';
import { createDirectoriesSafely } from '../../util';

/**
 * Запускает процесс обработки иконок.
 * Эта функция создает необходимую структуру каталогов и файлов для ленивой загрузки иконок,
 * а также может генерировать общий набор иконок в зависимости от переданных опций.
 *
 * @param {IconsToLazyExecutorSchema} options - Настройки для обработки иконок.
 * @returns {Promise<{ success: boolean }>} - Объект, сигнализирующий об успешности выполнения.
 */
export default async function runExecutor(options: IconsToLazyExecutorSchema): Promise<{ success: boolean }> {
  const pathToOutputFolderWithNames = path.join(
    __dirname,
    '../../../../',
    options.pathToOutputFolderWithNames!
  );
  const exportNameWithNames = options.exportNameWithNames ?? 'ICON_NAMES';

  const generateArraySet = options.generateArraySet;
  const pathToOutputFolderForArray = path.join(
    __dirname,
    '../../../../',
    options.pathToOutputFolderForArray!
  );
  const iconArraySetNameExportName = options.iconArraySetNameExportName ?? 'ICONS_ARRAY_SET';
  const iconNames: string[] = [];

  // Установка значений по умолчанию для необязательных параметров
  const ngPackageJsonName = 'ng-package.json';
  const addExportToSingleFile = options.addExportToSingleFile ?? false;
  const createNgPackage = options.createNgPackage ?? false;
  const generateIconSet = options.generateIconSet ?? false;
  const iconSetNameFileName = options.iconSetNameFileName ?? 'icon-set';
  const iconSetNameExportName = options.iconSetNameExportName ?? 'ICONS_SET';
  // Определение пути к файлу назначения на основе пути, указанного в опциях
  const destinationFile = path.join(__dirname, '../../../../', options.pathToOutputFile);
  const lazyFileName = options.pathToOutputFile.split('/').pop();
  // Определение папки назначения для удобства использования
  const destinationFolder = destinationFile.split('/').slice(0, -1).join('/');
  // Путь к папке с иконками
  const pathToFolder = path.join(__dirname, '../../../../', options.pathToFolder);
  // Имя константы для экспорта
  const exportConstName = options.exportName || 'PRIZM_LAZY_ICONS_SET';

  // Проверка существования папки с иконками
  if (!fs.existsSync(pathToFolder)) {
    return { success: false };
  }

  // Чтение файлов в папке
  const files = fs.readdirSync(pathToFolder);

  // Проверка наличия файлов
  if (!files.length) {
    return { success: false };
  }

  const importsInIconsArraySet: string[] = [];
  const allNamesInIconsArraySet: string[] = [];

  // Инициализация переменных для сбора результатов
  const result: string[] = [];
  const importsInIconsSet: string[] = [];
  const exportFromSingleFile: string[] = [];
  const exportsInIconsSet: string[] = [];
  let skipped = 0;
  const fixedNames: string[] = [];

  // Обработка каждого файла в папке
  for (const file of files) {
    // Пропуск файлов, не соответствующих префиксу, если он указан
    if (options.prefix && !file.toLowerCase().startsWith(options.prefix.toLowerCase())) {
      console.warn('SKIP FILE:', file);
      skipped++;
      continue;
    }

    const fileWithoutExt = file.split('.').slice(0, -1).join('.');
    let content = fs.readFileSync(path.join(pathToFolder, file), { encoding: 'utf-8' });

    // Корректировка имен в файле согласно заданным правилам
    // Обработка содержимого файлов для исправления названий
    const matches = content.matchAll(/name: '([^']+)'/g);
    for (const match of matches) {
      if (!match[1]) continue;
      const oldPart = match[1];

      // Применение правил для изменения имен
      const newPath = oldPart
        .replace(/-([a-zA-Z]{2,})([0-9]+)/g, '-$1-$2')
        // v-{N} > v{N}
        .replace(/-([a-zA-Z]{1})-([0-9]+)/g, '-$1$2')
        // 1-c > 1c
        .replace(/-([0-9]+)-([a-z]{1})(-|$)/g, '-$1$2$3');

      if (oldPart === newPath) continue;
      const changedPart = match[0].replace(oldPart, newPath);

      content = content.replaceAll(match[0], changedPart);
      fs.writeFileSync(path.join(pathToFolder, file), content);
      fixedNames.push(`${oldPart}>${newPath}`);
    }

    // Извлечение имени экспорта и названия иконки из содержимого файла
    const exportName = /export const ([^:]+)/.exec(content)?.[1];
    const iconName = /name: '([^']+)'/.exec(content)?.[1];

    if (!exportName || !iconName) {
      console.log('Can not find export name in file:', file);
      continue;
    }

    iconNames.push(iconName);

    // Подготовка каталога и перемещение файла
    const iconFolderPath = path.join(pathToFolder, iconName);
    fs.mkdirSync(iconFolderPath, { mode: 0o777 });
    console.log('CREATE FOLDER:', iconFolderPath);

    fs.renameSync(path.join(pathToFolder, file), path.join(iconFolderPath, file));

    if (createNgPackage) {
      // Создание ng-package.json и index.ts для каждой иконки
      fs.copyFileSync(path.join(__dirname, ngPackageJsonName), path.join(iconFolderPath, ngPackageJsonName));
    }

    const indexTsName = 'index.ts';
    fs.writeFileSync(path.join(iconFolderPath, indexTsName), `export * from './${fileWithoutExt}';`);

    // Подготовка данных для ленивой загрузки
    const newPath = path.join(path.relative(destinationFolder, pathToFolder), iconName, fileWithoutExt);
    result.push(`'${iconName}': () => import('./${newPath}').then((m) => m['${exportName}'])`);

    // создание папки
    createDirectoriesSafely(destinationFolder);

    if (createNgPackage) {
      // Создание ng-package.json и index.ts для каждой иконки
      fs.copyFileSync(
        path.join(__dirname, ngPackageJsonName),
        path.join(destinationFolder, ngPackageJsonName)
      );

      fs.writeFileSync(path.join(destinationFolder, 'index.ts'), `export * from './${lazyFileName}'`);
    }

    // Подготовка импортов и экспортов для генерации общего набора иконок, если требуется
    if (generateIconSet) {
      importsInIconsSet.push(`import { ${exportName} } from './${iconName}/${fileWithoutExt}';`);
      exportsInIconsSet.push(exportName);
    }

    // Подготовка импортов и экспортов для генерации набора иконок в виде массива, если требуется
    if (generateArraySet) {
      const newPath = path.join(
        path.relative(pathToOutputFolderForArray, pathToFolder),
        iconName,
        fileWithoutExt
      );
      importsInIconsArraySet.push(`import { ${exportName} } from './${newPath}';`);
      allNamesInIconsArraySet.push(exportName);
    }

    // Добавление всего экспорта в один файл, если требуется
    if (addExportToSingleFile) {
      exportFromSingleFile.push(`export { ${exportName} } from './${iconName}/${fileWithoutExt}';`);
    }
  }

  if (exportFromSingleFile.length) {
    fs.writeFileSync(path.join(pathToFolder, 'index.ts'), exportFromSingleFile.join('\n'));

    if (createNgPackage) {
      // Создание ng-package.json
      fs.copyFileSync(path.join(__dirname, ngPackageJsonName), path.join(pathToFolder, ngPackageJsonName));
    }
  }

  // Генерация файла с набором иконок, если необходимо
  if (generateIconSet) {
    console.log('Generating icon set...');
    const destinationIconSet = path.join(pathToFolder, `${iconSetNameFileName}.ts`);
    fs.writeFileSync(
      destinationIconSet,
      `${importsInIconsSet.join('\n')}\n\nexport const ${iconSetNameExportName} = [\n${exportsInIconsSet.join(
        ',\n'
      )}\n];\n`
    );
  }

  if (pathToOutputFolderWithNames) {
    console.log('Generating icon names...');

    createDirectoriesSafely(pathToOutputFolderWithNames);

    const destinationNamesSet = path.join(pathToOutputFolderWithNames, `index.ts`);

    fs.writeFileSync(
      destinationNamesSet,
      `export const ${exportNameWithNames} = [
        ${iconNames.map(name => `'${name}'`).join(',\n')}
      ];`
    );

    if (createNgPackage) {
      // Создание ng-package.json
      fs.copyFileSync(
        path.join(__dirname, ngPackageJsonName),
        path.join(pathToOutputFolderWithNames, ngPackageJsonName)
      );
    }
  }

  // Генерация файла с набором иконок в виде массива, если необходимо
  if (generateArraySet) {
    console.log('Generating icon array set...');
    const destinationIconSet = path.join(pathToOutputFolderForArray, `index.ts`);

    createDirectoriesSafely(pathToOutputFolderForArray);

    if (createNgPackage) {
      // Создание ng-package.json
      fs.copyFileSync(
        path.join(__dirname, ngPackageJsonName),
        path.join(pathToOutputFolderForArray, ngPackageJsonName)
      );
    }

    fs.writeFileSync(
      destinationIconSet,
      `
        ${importsInIconsArraySet.join('\n')}
        \n
        \n
        export const ${iconArraySetNameExportName} = [\n${allNamesInIconsArraySet.join(',\n')}\n];
      `
    );
  }

  // Вывод итоговых сообщений о процессе
  console.warn('ALL NAMES:', iconNames.length);
  console.warn('FIXED NAMES:', fixedNames);
  console.warn('FILES SKIPPED:', skipped);
  console.warn('FILES PROCESSED:', result.length);

  // Генерация файла для ленивой загрузки с экспортами
  fs.writeFileSync(destinationFile, `export const ${exportConstName} = {\n${result.join(',\n')}\n};`);

  return { success: true };
}
