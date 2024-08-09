import { formatFiles, Tree } from '@nrwl/devkit';
import { PrizmNxMvConfig, PrizmNxMvConfigVersion, PrizmNxMvSchema } from './schema';
import * as fs from 'fs';
import { copyFolder, difference, getProjectConfigurations, visitAllFiles } from './util';
import * as ejs from 'ejs';

/**
 * Renders a string using EJS templating.
 * @param {string} content - The content to render.
 * @param {Record<string, unknown>} params - The parameters to pass to the EJS renderer.
 * @returns {string} - The rendered content.
 */
function renderEjs(content: string, params: Record<string, unknown>): string {
  return ejs.render(content, params);
}

/**
 * Extracts variables passed by command from the schema.
 * @param {PrizmNxMvSchema} schema - The schema containing the variables.
 * @returns {Record<string, unknown>} - The extracted variables.
 */
function getVarsPassedByCommand(schema: PrizmNxMvSchema): Record<string, unknown> {
  return Object.entries(schema)
    .filter(([key]) => key.startsWith('var'))
    .reduce((acc, [key, val]) => {
      const keyWithoutPrefix = key.replace(/^var/, '');
      const formattedKey = [keyWithoutPrefix[0].toLowerCase(), keyWithoutPrefix.slice(1)].join('');
      acc[formattedKey] = val;
      return acc;
    }, {} as Record<string, unknown>);
}

/**
 * Constructs the full path to the configuration file.
 * @param {string} projectRoot - The root directory of the project.
 * @param {string} configPath - The path to the configuration file.
 * @returns {string} - The full path to the configuration file.
 */
function getConfigFilePath(projectRoot: string, configPath: string): string {
  return configPath.startsWith('/') ? configPath : `${projectRoot}/${configPath}`;
}

/**
 * Loads the configuration file.
 * @param {string} configPath - The path to the configuration file.
 * @returns {PrizmNxMvConfig} - The loaded configuration.
 * @throws Will throw an error if the configuration file cannot be loaded.
 */
function loadConfig(configPath: string): PrizmNxMvConfig {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(configPath) as PrizmNxMvConfig;
  } catch (error) {
    throw new Error('Cannot get config file');
  }
}

/**
 * Retrieves the versions from the configuration file.
 * @param {PrizmNxMvConfig} file - The configuration file.
 * @returns {PrizmNxMvConfig['versions']} - The versions from the configuration file.
 * @throws Will throw an error if no versions are found in the configuration file.
 */
function getVersions(file: PrizmNxMvConfig): PrizmNxMvConfig['versions'] {
  const versionsObj = file?.versions ?? {};
  if (!Object.keys(versionsObj).length) {
    throw new Error('Cannot get versions from config file');
  }
  return versionsObj;
}

/**
 * Retrieves the selected project version from the versions.
 * @param {PrizmNxMvConfig['versions']} versions - The versions from the configuration file.
 * @param {string} projectName - The name of the project.
 * @returns {PrizmNxMvConfigVersion | undefined} - The selected project version or undefined if not found.
 */
function getSelectedProject(
  versions: PrizmNxMvConfig['versions'],
  projectName: string
): PrizmNxMvConfigVersion | undefined {
  return versions[projectName];
}

/**
 * Retrieves the list of files to ignore from the nxmv.ignore file.
 * @param {string} projectRoot - The root directory of the project.
 * @returns {string[]} - The list of files to ignore.
 */
function getIgnoreFiles(projectRoot: string): string[] {
  const ignoreFilePath = `${projectRoot}/nxmv.ignore`;
  if (!fs.existsSync(ignoreFilePath)) {
    return [];
  }

  const ignoreFileStr = fs.readFileSync(ignoreFilePath).toString();
  return ignoreFileStr
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}

/**
 * Processes the files based on the provided version configuration.
 * @param {Tree} tree - The Tree representing the file system.
 * @param {string} projectRoot - The root directory of the project.
 * @param {PrizmNxMvConfig} version - The version configuration.
 * @param {Record<string, unknown>} varsPassedByCommand - The variables passed by command.
 * @param {string[]} ignoreFileArr - The list of files to ignore.
 * @returns {Promise<void>} - Promise resolving when the files have been processed.
 */
async function processFiles(
  tree: Tree,
  projectRoot: string,
  version: PrizmNxMvConfigVersion,
  varsPassedByCommand: Record<string, unknown>,
  ignoreFileArr: string[]
): Promise<void> {
  const needProjects = [
    ...(version.project ? [version.project] : []),
    ...(version.projects ? version.projects : []),
  ];

  const projects = getProjectConfigurations(tree)
    .filter(i => version.all || needProjects.includes(i.name as any))
    .map(i => i.root);

  const allRoot = [...(version.rootChange ? ['/'] : []), ...projects];

  const remove = version.remove ?? [];
  remove.forEach(rmFile => tree.delete(rmFile));

  for (const sourceRoot of allRoot) {
    visitAllFiles(
      tree,
      sourceRoot,
      filePath => {
        const fileName = filePath.split('/').pop() ?? '';
        const extFiles = Array.isArray(version.extFile) ? version.extFile : [version.extFile];

        for (const extFile of extFiles) {
          if (fileName.endsWith(extFile)) {
            const newFileName = filePath.replace(new RegExp(extFile + '$', 'g'), '');
            let fileContent = tree.read(filePath)?.toString();

            const allVariables = {
              ...varsPassedByCommand,
              ...(version.consts ?? {}),
            };

            if (fileContent && Object.keys(allVariables).length) {
              fileContent = renderEjs(fileContent, allVariables);
            }

            if (fileContent) tree.write(newFileName, fileContent);
            break;
          }
        }
      },
      (filePath: string) => {
        const filePathWithoutPrefix = filePath.replace(/^[/]+/g, '');

        if (sourceRoot === '/' && projects.includes(filePathWithoutPrefix)) {
          return false;
        }

        if (ignoreFileArr.some(ignoreFile => filePathWithoutPrefix.startsWith(ignoreFile))) {
          return false;
        }

        const fileName = filePath.split('/').pop() as any;
        const extFolders = Array.isArray(version.extFolder) ? version.extFolder : [version.extFolder];

        for (const extFolder of extFolders) {
          if (fileName.endsWith(extFolder)) {
            const newFileName = filePath.replace(new RegExp(extFolder + '$', 'g'), '');

            const oldFiles: string[] = [];
            visitAllFiles(tree, newFileName, oldFilePath => oldFiles.push(oldFilePath));

            const newFiles: string[] = [];
            visitAllFiles(tree, filePath, oldFilePath => newFiles.push(oldFilePath));

            difference(oldFiles, newFiles).forEach(i => tree.delete(i));

            copyFolder(tree, filePath, newFileName);

            return false;
          }
        }
        return true;
      }
    );
  }
}

/**
 * Main function to update project files based on the schema and configuration.
 * @param {Tree} tree - The Tree representing the file system.
 * @param {PrizmNxMvSchema} schema - The schema containing update instructions.
 * @returns {Promise<void>} - Promise resolving when the update is complete.
 */
export default async function (tree: Tree, schema: PrizmNxMvSchema): Promise<void> {
  const projectRoot = tree.root;
  const varsPassedByCommand = getVarsPassedByCommand(schema);

  const configPath = getConfigFilePath(projectRoot, schema.config);
  const config = loadConfig(configPath);
  const versions = getVersions(config);

  const selectedProject = getSelectedProject(versions, schema.name);
  if (!selectedProject) {
    throw new Error('Cannot find project in config');
  }

  const ignoreFileArr = getIgnoreFiles(projectRoot);

  await processFiles(tree, projectRoot, selectedProject, varsPassedByCommand, ignoreFileArr);

  return formatFiles(tree);
}
