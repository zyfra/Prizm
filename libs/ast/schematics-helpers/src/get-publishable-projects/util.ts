import { getProjects, ProjectConfiguration, readProjectConfiguration, Tree } from '@nrwl/devkit';

/**
 * Ищет все публикуемые проекты (те, что имеют package.json) в workspace.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @return {ProjectConfiguration[]} - Массив объектов конфигурации проектов с файлами package.json.
 */
export function prizmAstGetPublishableProjects(tree: Tree): ProjectConfiguration[] {
  // Получаем конфигурации всех проектов в рабочем пространстве
  const projects = getProjects(tree);

  // Получаем имена всех проектов
  const projectNames = [...projects.keys()];

  // Фильтруем имена проектов, проверяя наличие файла package.json в корне каждого проекта
  return (
    projectNames
      .filter(name => {
        const project = readProjectConfiguration(tree, name);
        const packageJsonPath = `${project.root}/package.json`;

        // Если файл package.json существует в проекте, включаем его в итоговый список
        return tree.exists(packageJsonPath);
      })
      // Маппим имена проектов обратно в конфигурации проектов
      .map(i => projects.get(i)) as any
  );
}
