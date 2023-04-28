import { Tree, joinPathFragments } from '@nrwl/devkit';

/**
 * Recursively updates all files in the given directory tree if they meet the condition
 * specified by `canUpdateFunc`. The updates are made using the `updaterFunc`.
 *
 * @param {Tree} tree - The file tree representing the project.
 * @param {string} [dir=''] - The directory to start the search from. Default is the root directory.
 * @param {(entryPath: string, content: string) => boolean} canUpdateFunc - A function that determines if a file can be updated.
 * @param {(entryPath: string, fileContent: string) => string} updaterFunc - A function that updates the file content.
 */
export function prizmAstUpdateAllFilesWhen(
  tree: Tree,
  dir: string = '',
  canUpdateFunc: (entryPath: string, content: string) => boolean,
  updaterFunc: (entryPath: string, fileContent: string) => string
): void {
  // Get the list of children (files and directories) in the current directory
  const entries = tree.children(dir);

  // Iterate through each entry in the directory
  for (const entry of entries) {
    // Construct the entry path by joining the current directory and entry name
    const entryPath = joinPathFragments(dir, entry);

    // If the entry is a file, check if it can be updated and update if necessary
    if (tree.isFile(entryPath)) {
      const content = tree.read(entryPath, 'utf-8');

      // Check if the file meets the condition for updating
      if (!canUpdateFunc(entryPath, content)) continue;

      // Update the file content using the provided updater function
      const newContent = updaterFunc(entryPath, content);

      // Write the updated content back to the file only if it has changed
      if (newContent !== content) tree.write(entryPath, newContent);
    } else {
      // If the entry is a directory, recursively call the function to process its children
      prizmAstUpdateAllFilesWhen(tree, entryPath, canUpdateFunc, updaterFunc);
    }
  }
}
