import { Tree } from '@nrwl/devkit';
/**
 * Recursively updates all files in the given directory tree if they meet the condition
 * specified by `canUpdateFunc`. The updates are made using the `updaterFunc`.
 *
 * @param {Tree} tree - The file tree representing the project.
 * @param {string} [dir=''] - The directory to start the search from. Default is the root directory.
 * @param {(entryPath: string, content: string) => boolean} canUpdateFunc - A function that determines if a file can be updated.
 * @param {(entryPath: string, fileContent: string) => string} updaterFunc - A function that updates the file content.
 */
export declare function prizmAstUpdateAllFilesWhen(tree: Tree, dir: string | undefined, canUpdateFunc: (entryPath: string, content: string) => boolean, updaterFunc: (entryPath: string, fileContent: string) => string): void;
