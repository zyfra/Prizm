import { getProjects, ProjectConfiguration, Tree } from '@nrwl/devkit';

export function getProjectConfigurations(tree: Tree): ProjectConfiguration[] {
  // Получаем конфигурации всех проектов в рабочем пространстве
  const projects = getProjects(tree);
  // Получаем имена всех проектов
  const projectNames = [...projects.keys()];

  return projectNames.map(i => projects.get(i));
}
export function getProjectRoots(tree: Tree, names: string[]): string[] {
  return getProjectConfigurations(tree)
    .filter(i => names.includes(i.name))
    .map(i => i.root);
}

/**
 * Run the callback on all files inside the specified path
 */
export function visitAllFiles(
  tree: Tree,
  path: string,
  callback: (filePath: string) => void,
  runInFolder: (folderPath: string) => boolean = () => true
) {
  tree.children(path).forEach(fileName => {
    const filePath = `${path}/${fileName}`;
    if (!tree.isFile(filePath)) {
      if (runInFolder(filePath)) visitAllFiles(tree, filePath, callback, runInFolder);
    } else {
      callback(filePath);
    }
  });
}

export function copyFolder(tree: Tree, path: string, newPath: string) {
  visitAllFiles(
    tree,
    path,
    (filePath: string) => {
      const newPathToFile = filePath.replace(path, newPath);

      tree.write(newPathToFile, tree.read(filePath));
    },
    () => true
  );
}
