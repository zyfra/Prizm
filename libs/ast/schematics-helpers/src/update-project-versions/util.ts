import { formatFiles, ProjectConfiguration, readJson, Tree, updateJson } from '@nrwl/devkit';
import { prizmSemVerParse, prizmSemVerStringify, prizmSemVerUpdate } from '@prizm-ui/ast';

/**
 * Обновляет версию пакета в package.json для списка проектов.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @param {ProjectConfiguration[]} projects - Массив объектов конфигурации проектов.
 * @param {string} newVersion - Новая версия пакета.
 * @param {string} currentVersion - Установить версию для изменения вместо версии из package.json
 * @return {any[]} - Возвращает пустой массив.
 */
export function prizmAstUpdateProjectVersions(
  tree: Tree,
  projects: ProjectConfiguration[],
  newVersion: string,
  currentVersion?: string,
  updateInDependencies = false
): Promise<void> {
  let packages: { name: string; version: string }[] = [];
  if (updateInDependencies)
    packages = projects.map(project => {
      const path = [project.root, 'package.json'].join('/');
      const { name, version } = readJson<{ name: string; version: string }>(tree, path);
      return { name, version };
    });

  // Проходим по списку проектов
  projects.forEach(project => {
    // Формируем путь до файла package.json каждого проекта
    const path = [project.root, 'package.json'].join('/');

    // Читаем содержимое файла package.json
    // Обновляем поле version в считанном package.json
    // Обновляем файл package.json новыми данными
    updateJson(tree, path, packageJson => {
      // Обновляем поле version в считанном package.json
      const command = prizmSemVerParse(newVersion, true);
      const versionObject = prizmSemVerUpdate(
        prizmSemVerParse(currentVersion ?? packageJson.version),
        command
      );
      packageJson.version = prizmSemVerStringify(versionObject);

      if (packages.length)
        packages.forEach(({ name, version }) => {
          if (packageJson.dependencies[name]) {
            packageJson.dependencies[name].replace(version, packageJson.version);
          }
          if (packageJson.devDependencies[name]) {
            packageJson.devDependencies[name].replace(version, packageJson.version);
          }
          if (packageJson.peerDependencies[name]) {
            packageJson.peerDependencies[name].replace(version, packageJson.version);
          }
        });

      return packageJson;
    });
  });

  // Форматируем файлы в дереве для обеспечения соблюдения стиля кодирования
  return formatFiles(tree);
}
