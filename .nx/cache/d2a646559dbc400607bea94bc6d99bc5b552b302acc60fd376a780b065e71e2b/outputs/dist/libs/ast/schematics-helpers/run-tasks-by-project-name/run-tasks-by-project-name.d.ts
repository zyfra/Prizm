import { Tree } from '@nrwl/devkit';
import { PrizmTemplateTask } from '@prizm-ui/ast';
import { IPrizmAstCodeTask } from '@prizm-ui/ast/code';
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
export declare function prizmAstRunSchematicsByTasks(tree: Tree, dir: string, templateTasks: PrizmTemplateTask[], codeTasks: IPrizmAstCodeTask[], options?: {
    runPrettier?: boolean;
}): Promise<any>;
