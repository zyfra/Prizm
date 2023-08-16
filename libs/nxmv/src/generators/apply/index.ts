import { formatFiles, Tree } from '@nrwl/devkit';
import { PrizmNxMvConfig, PrizmNxMvSchema } from './schema';
import * as fs from 'fs';
import { copyFolder, getProjectConfigurations, visitAllFiles } from './util';
import { difference } from 'lodash';

/**
 * Заменяем файлы проектов в рабочем пространстве на основе схемы PluginUpdateVersionSchema и конфига.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @param {PrizmNxMvSchema} schema - Схема обновления.
 * @return {Promise<void>} - Promise, который резолвится без возвращения какого-либо значения.
 */
export default async function (tree: Tree, schema: PrizmNxMvSchema): Promise<void> {
  const projectRoot = tree.root;

  let config = schema.config;
  if (!config.startsWith('/')) config = `${projectRoot}/${config}`;

  const file = require(config) as PrizmNxMvConfig;
  if (!file) {
    throw new Error('Can nog get config file');
  }

  const versionsObj = (file?.versions ?? {}) as PrizmNxMvConfig['versions'];
  const versions = Object.entries(versionsObj);
  if (!versions.length) {
    throw new Error('Can nog get versions of config file');
  }

  const selectedProject = versions.find(i => i[0] === schema.name);
  if (!selectedProject) {
    throw new Error('Can not find project in config');
  }

  const ignoreFileStr = fs.readFileSync(`${projectRoot}/nxmv.ignore`)?.toString() ?? '';
  const ignoreFileArr = ignoreFileStr
    .split('\n')
    .map(i => i.trim())
    .filter(Boolean);

  for (const [key, version] of versions) {
    if (key !== schema.name) continue;
    // Объединяем в один список указанные в схеме проекты и все остальные проекты, если задан параметр all
    const needProjects = [
      ...(version.project ? [version.project] : []),
      ...(version.projects ? version.projects : []),
    ];

    // get folder projects
    const projects = getProjectConfigurations(tree)
      .filter(i => version.all || needProjects.includes(i.name))
      .map(i => i.root);

    const allRoot = [...(version.rootChange ? ['/'] : []), ...projects];

    for (const sourceRoot of allRoot) {
      visitAllFiles(
        tree,
        sourceRoot,
        filePath => {
          const fileName = filePath.split('/').pop();
          if (fileName.endsWith(version.extFile)) {
            // if we found file that to change file
            const newFileName = filePath.replace(new RegExp(version.extFile + '$', 'g'), '');
            tree.write(newFileName, tree.read(filePath));
          }
        },
        (filePath: string) => {
          // trim start //
          const filePathWithoutPrefix = filePath.replace(/^[\/]+/g, '');

          // if it is source root > except project folders
          if (sourceRoot === '/' && projects.includes(filePathWithoutPrefix)) {
            return false;
          }

          // if it is ignore folder > stop
          if (ignoreFileArr.find(ignoreFile => filePathWithoutPrefix.startsWith(ignoreFile))) {
            return false;
          }

          // copy folder
          const fileName = filePath.split('/').pop();
          if (fileName.endsWith(version.extFolder)) {
            const newFileName = filePath.replace(new RegExp(version.extFolder + '$', 'g'), '');

            // need remove only not files
            // get current files
            const oldFiles = [];
            visitAllFiles(tree, newFileName, oldFilePath => {
              oldFiles.push(oldFilePath);
            });

            const newFiles = [];
            visitAllFiles(tree, filePath, oldFilePath => {
              newFiles.push(oldFilePath);
            });

            // remove unnecessary files
            difference(oldFiles, newFiles).forEach(i => tree.delete(i));

            copyFolder(tree, filePath, newFileName);

            return false;
          }

          return true;
        }
      );
    }
  }

  return formatFiles(tree);
}
