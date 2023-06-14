import { Tree } from '@nrwl/devkit';
import {
  prizmAstGetPublishableProjects,
  prizmAstUpdateProjectVersions,
} from '@prizm-ui/ast/schematics-helpers';
import { PluginUpdateVersionSchema } from './schema';

/**
 * Обновляет версию публикуемых проектов в рабочем пространстве на основе схемы PluginUpdateVersionSchema.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @param {PluginUpdateVersionSchema} schema - Схема обновления версии.
 * @return {Promise<void>} - Promise, который резолвится без возвращения какого-либо значения.
 */
export default async function (tree: Tree, schema: PluginUpdateVersionSchema): Promise<void> {
  // Объединяем в один список указанные в схеме проекты и все остальные проекты, если задан параметр all
  const needProjects = [
    ...(schema.project ? [schema.project] : []),
    ...(schema.projects ? schema.projects : []),
  ];

  // Получаем публикуемые проекты и фильтруем их на основе схемы (все проекты или указанные)
  const projectNamesWithPackageJson = prizmAstGetPublishableProjects(tree).filter(
    i => schema.all || needProjects.includes(i.name)
  );

  // Обновляем версию выбранных проектов
  return prizmAstUpdateProjectVersions(
    tree,
    projectNamesWithPackageJson,
    schema.newVersion.toString(),
    schema.currentVersion?.toString(),
    schema.updateInDependencies
  );
}
