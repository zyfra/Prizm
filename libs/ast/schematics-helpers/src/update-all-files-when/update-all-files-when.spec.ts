import { Tree } from '@nrwl/devkit';
import { createTreeWithEmptyV1Workspace } from '@nrwl/devkit/testing';
import { prizmAstUpdateAllFilesWhen } from '../update-all-files-when/prizm-ast-update-all-files-when';

describe('prizmAstUpdateAllFilesWhen', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyV1Workspace();
    tree.write('dir1/file1.txt', 'Initial content of file1');
    tree.write('dir1/file2.txt', 'Initial content of file2');
    tree.write('dir2/file3.txt', 'Initial content of file3');
    tree.write('dir2/file4.txt', 'Initial content of file4');
  });

  it('should update files based on the provided conditions and updater function', () => {
    const canUpdateFunc = (entryPath: string, content: string): boolean => {
      return entryPath.endsWith('2.txt') || entryPath.endsWith('3.txt');
    };

    const updaterFunc = (entryPath: string, fileContent: string): string => {
      return fileContent.replace('Initial', 'Updated');
    };

    prizmAstUpdateAllFilesWhen(tree, '', canUpdateFunc, updaterFunc);

    expect(tree.read('dir1/file1.txt', 'utf-8')).toEqual('Initial content of file1');
    expect(tree.read('dir1/file2.txt', 'utf-8')).toEqual('Updated content of file2');
    expect(tree.read('dir2/file3.txt', 'utf-8')).toEqual('Updated content of file3');
    expect(tree.read('dir2/file4.txt', 'utf-8')).toEqual('Initial content of file4');
  });

  it('should not update any files when canUpdateFunc returns false for all files', () => {
    const canUpdateFunc = (entryPath: string, content: string): boolean => {
      return false;
    };

    const updaterFunc = (entryPath: string, fileContent: string): string => {
      return fileContent.replace('Initial', 'Updated');
    };

    prizmAstUpdateAllFilesWhen(tree, '', canUpdateFunc, updaterFunc);

    expect(tree.read('dir1/file1.txt', 'utf-8')).toEqual('Initial content of file1');
    expect(tree.read('dir1/file2.txt', 'utf-8')).toEqual('Initial content of file2');
    expect(tree.read('dir2/file3.txt', 'utf-8')).toEqual('Initial content of file3');
    expect(tree.read('dir2/file4.txt', 'utf-8')).toEqual('Initial content of file4');
  });

  it('should update all files when canUpdateFunc returns true for all files', () => {
    const canUpdateFunc = (entryPath: string, content: string): boolean => {
      return true;
    };

    const updaterFunc = (entryPath: string, fileContent: string): string => {
      return fileContent.replace('Initial', 'Updated');
    };

    prizmAstUpdateAllFilesWhen(tree, '', canUpdateFunc, updaterFunc);

    expect(tree.read('dir1/file1.txt', 'utf-8')).toEqual('Updated content of file1');
    expect(tree.read('dir1/file2.txt', 'utf-8')).toEqual('Updated content of file2');
    expect(tree.read('dir2/file3.txt', 'utf-8')).toEqual('Updated content of file3');
    expect(tree.read('dir2/file4.txt', 'utf-8')).toEqual('Updated content of file4');
  });

  it('should update files based on their content', () => {
    const canUpdateFunc = (entryPath: string, content: string): boolean => {
      return content.includes('file1') || content.includes('file4');
    };

    const updaterFunc = (entryPath: string, fileContent: string): string => {
      return fileContent.replace('Initial', 'Updated');
    };

    prizmAstUpdateAllFilesWhen(tree, '', canUpdateFunc, updaterFunc);

    expect(tree.read('dir1/file1.txt', 'utf-8')).toEqual('Updated content of file1');
    expect(tree.read('dir1/file2.txt', 'utf-8')).toEqual('Initial content of file2');
    expect(tree.read('dir2/file3.txt', 'utf-8')).toEqual('Initial content of file3');
    expect(tree.read('dir2/file4.txt', 'utf-8')).toEqual('Updated content of file4');
  });
});
