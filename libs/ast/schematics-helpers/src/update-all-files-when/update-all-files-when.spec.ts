import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree } from '@nrwl/devkit';
import { prizmAstUpdateAllFilesWhen } from './prizm-ast-update-all-files-when';

describe('updateAllFilesWhen', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  const conditionFunc = (entryPath: string, content: string): boolean => {
    return entryPath.endsWith('.txt') && content.includes('test');
  };

  const updaterFunc = (entryPath: string, fileContent: string): any => {
    return fileContent.replace('test', 'updated');
  };

  it('should update files that meet the condition', () => {
    // Создание структуры файлов
    tree.write('file1.txt', 'This is a test file.');
    tree.write('file2.txt', 'This is not a target file.');
    tree.write('file3.js', 'This is a test file with a different extension.');

    // Вызов updateAllFilesWhen
    prizmAstUpdateAllFilesWhen(tree, '/', conditionFunc, updaterFunc);

    // Проверка обновленных файлов
    expect(tree.read('file1.txt', 'utf-8')).toEqual('This is a updated file.');
    expect(tree.read('file2.txt', 'utf-8')).toEqual('This is not a target file.');
    expect(tree.read('file3.js', 'utf-8')).toEqual('This is a test file with a different extension.');
  });

  it('should not update files that do not meet the condition', () => {
    // Создание структуры файлов
    tree.write('file4.txt', 'This file should not be updated.');
    tree.write('file5.js', 'This is another test file with a different extension.');

    // Вызов updateAllFilesWhen
    prizmAstUpdateAllFilesWhen(tree, '/', conditionFunc, updaterFunc);

    // Проверка обновленных файлов
    expect(tree.read('file4.txt', 'utf-8')).toEqual('This file should not be updated.');
    expect(tree.read('file5.js', 'utf-8')).toEqual('This is another test file with a different extension.');
  });
});
