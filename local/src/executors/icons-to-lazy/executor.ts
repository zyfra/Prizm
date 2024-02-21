import { IconsToLazyExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Запускает процесс обработки иконок.
 * Эта функция создает необходимую структуру каталогов и файлов для ленивой загрузки иконок,
 * а также может генерировать общий набор иконок в зависимости от переданных опций.
 *
 * @param {IconsToLazyExecutorSchema} options - Настройки для обработки иконок.
 * @returns {Promise<{ success: boolean }>} - Объект, сигнализирующий об успешности выполнения.
 */
export default async function runExecutor(options: IconsToLazyExecutorSchema): Promise<{ success: boolean }> {
  // Установка значений по умолчанию для необязательных параметров
  const generateIconSet = options.generateIconSet ?? false;
  const iconSetNameFileName = options.iconSetNameFileName ?? 'icon-set';
  const iconSetNameExportName = options.iconSetNameExportName ?? 'ICONS_SET';
  // Определение пути к файлу назначения на основе пути, указанного в опциях
  const destinationFile = path.join(__dirname, '../../../../', options.pathToOutputFile);
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

  // Инициализация переменных для сбора результатов
  const result: string[] = [];
  const importsInIconsSet: string[] = [];
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
      let newPath = oldPart
        .replace(/-([a-zA-Z]{2,})([0-9]+)/g, '-$1-$2')
        .replace(/-([a-zA-Z]{1})-([0-9]+)/g, '-$1$2')
        .replace(/-([0-9]+)-([a-z]+)/g, '-$1$2');

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

    // Подготовка каталога и перемещение файла
    const iconFolderPath = path.join(pathToFolder, iconName);
    fs.mkdirSync(iconFolderPath, { mode: 0o777 });
    console.log('CREATE FOLDER:', iconFolderPath);

    fs.renameSync(path.join(pathToFolder, file), path.join(iconFolderPath, file));

    // Создание ng-package.json и index.ts для каждой иконки
    const ngPackageJsonName = 'ng-package.json';
    fs.copyFileSync(path.join(__dirname, ngPackageJsonName), path.join(iconFolderPath, ngPackageJsonName));

    const indexTsName = 'index.ts';
    fs.writeFileSync(path.join(iconFolderPath, indexTsName), `export * from './${fileWithoutExt}';`);

    // Подготовка данных для ленивой загрузки
    const newPath = path.join(path.relative(destinationFolder, pathToFolder), iconName, fileWithoutExt);
    result.push(`'${iconName}': () => import('./${newPath}').then((m) => m['${exportName}'])`);

    // Подготовка импортов и экспортов для генерации общего набора иконок, если требуется
    if (generateIconSet) {
      importsInIconsSet.push(`import { ${exportName} } from './${iconName}/${fileWithoutExt}';`);
      exportsInIconsSet.push(exportName);
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

  // Вывод итоговых сообщений о процессе
  console.warn('FIXED NAMES:', fixedNames);
  console.warn('FILES SKIPPED:', skipped);
  console.warn('FILES PROCESSED:', result.length);

  // Генерация файла для ленивой загрузки с экспортами
  fs.writeFileSync(destinationFile, `export const ${exportConstName} = {\n${result.join(',\n')}\n};`);

  return { success: true };
}
