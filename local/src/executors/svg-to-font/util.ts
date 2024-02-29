import * as path from 'path';
import * as fs from 'fs';

/**
 * Создает папки по заданному пути и устанавливает права доступа 0o777 (доступно всем).
 * @param targetPath Путь к папке, которую нужно создать.
 */
export function createDirectoriesSafely(targetPath: string): void {
  const resolvedPath = path.resolve(targetPath);

  resolvedPath.split(path.sep).reduce((currentPath, folder) => {
    currentPath += folder + path.sep;
    if (!fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath, 0o777); // 0o777 - read, write, execute для всех.
    }
    return currentPath;
  }, '');
}
