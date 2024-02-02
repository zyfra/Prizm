import { ProjectConfiguration, Tree } from '@nrwl/devkit';
/**
 * Обновляет версию пакета в package.json для списка проектов.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @param {ProjectConfiguration[]} projects - Массив объектов конфигурации проектов.
 * @param {string} newVersion - Новая версия пакета.
 * @param {string} currentVersion - Установить версию для изменения вместо версии из package.json
 * @return {any[]} - Возвращает пустой массив.
 */
export declare function prizmAstUpdateProjectVersions(tree: Tree, projects: ProjectConfiguration[], newVersion: string, currentVersion?: string, updateInDependencies?: boolean): Promise<void>;
