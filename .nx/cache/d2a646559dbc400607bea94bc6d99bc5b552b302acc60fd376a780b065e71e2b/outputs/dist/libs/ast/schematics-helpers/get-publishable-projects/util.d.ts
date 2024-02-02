import { ProjectConfiguration, Tree } from '@nrwl/devkit';
/**
 * Ищет все публикуемые проекты (те, что имеют package.json) в workspace.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @return {ProjectConfiguration[]} - Массив объектов конфигурации проектов с файлами package.json.
 */
export declare function prizmAstGetPublishableProjects(tree: Tree): ProjectConfiguration[];
