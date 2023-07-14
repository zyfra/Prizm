/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { formatFiles, Tree } from '@nrwl/devkit';
import isEqual from 'lodash/isEqual';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { IPrizmAstCodeTask, PrizmAstCodeTaskProcessor } from '@prizm-ui/ast/code';
import { prizmAstUpdateAllFilesWhen } from '../update-all-files-when';
import { formatFileWithPrettier } from '../util/prettier';

/**
 * Runs schematics on specified files based on provided tasks.
 *
 * @param {Tree} tree - The Nx virtual file system tree.
 * @param {string} dir - The directory to start searching for files.
 * @param {PrizmTemplateTask[]} templateTasks - The array of template tasks to be executed on HTML files.
 * @param {IPrizmAstCodeTask[]} codeTasks - The array of code tasks to be executed on TypeScript files.
 * @returns {Promise<any>} - A promise that resolves when all updates are complete.
 *
 * @example
 * // To run the schematics using the provided tasks:
 * prizmAstRunSchematicsByTasks(tree, 'src/app', templateTasks, codeTasks);
 */
export async function prizmAstRunSchematicsByTasks(
  tree: Tree,
  dir: string,
  templateTasks: PrizmTemplateTask[],
  codeTasks: IPrizmAstCodeTask[],
  options?: {
    runPrettier?: boolean;
  }
): Promise<any> {
  // Update all files in the tree when they meet the conditions set by canUpdateFunc.
  prizmAstUpdateAllFilesWhen(
    tree,
    dir,
    (entryPath: string, _: string) => entryPath.endsWith('.ts') || entryPath.endsWith('.html'),
    (entryPath: string, fileContent: string) => {
      const initialFileContent = fileContent;
      try {
        // Process HTML files using the PrizmHtmlParse and PrizmTemplateTaskProcessor.
        if (entryPath.endsWith('.html')) {
          const parsed = prizmAstHtmlParse(fileContent);
          const nodeProcessor = new PrizmTemplateTaskProcessor(templateTasks);
          const updatedFile = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
          if (!isEqual(parsed, prizmAstHtmlParse(fileContent))) fileContent = updatedFile;
        }
        // Process TypeScript files using the PrizmAstCodeTaskProcessor.
        else if (entryPath.endsWith('.ts')) {
          const nodeProcessor = new PrizmAstCodeTaskProcessor(codeTasks);
          fileContent = nodeProcessor.processTasks(fileContent);
        }

        if (options?.runPrettier && initialFileContent !== fileContent) {
          formatFileWithPrettier(fileContent);
        }
      } catch (error) {
        console.warn('WARNING:prizmAstRunSchematicsByTasks', error);
      }

      return fileContent;
    }
  );

  // Format all updated files.
  await formatFiles(tree);
}
