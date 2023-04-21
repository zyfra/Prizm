import { Tree, joinPathFragments } from '@nrwl/devkit';

export function prizmAstUpdateAllFilesWhen(
  tree: Tree,
  dir: string = '',
  canUpdateFunc: (entryPath: string, content: string) => boolean,
  updaterFunc: (entryPath: string, fileContent: string) => string
): void {
  const entries = tree.children(dir);

  for (const entry of entries) {
    const entryPath = joinPathFragments(dir, entry);

    if (tree.isFile(entryPath)) {
      const content = tree.read(entryPath, 'utf-8');
      if (!canUpdateFunc(entryPath, content)) continue;
      const newContent = updaterFunc(entryPath, content);
      if (newContent !== content) tree.write(entryPath, newContent);
    } else {
      prizmAstUpdateAllFilesWhen(tree, entryPath, canUpdateFunc, updaterFunc);
    }
  }
}
