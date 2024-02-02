import { IPrizmAstCodeTask } from './model';
import { PrizmAstAddImportsToNgModuleCodeTask } from './add-imports-to-ng-module';
import { PrizmAstAddImportsIfNeededCodeTask } from './add-imports';
/**
 * @class PrizmAstCodeTaskProcessor
 * @description
 * A class responsible for processing a series of PrizmAstCodeTasks and applying
 * them to the given TypeScript code. It includes built-in tasks by default and allows
 * adding custom tasks as needed.
 */
export declare class PrizmAstCodeTaskProcessor {
    private tasks;
    readonly defaultTasks: (PrizmAstAddImportsToNgModuleCodeTask | PrizmAstAddImportsIfNeededCodeTask)[];
    /**
     * @constructor
     * @param {IPrizmAstCodeTask[]} tasks - An array of tasks to be processed.
     */
    constructor(tasks: IPrizmAstCodeTask[]);
    /**
     * @function processTasks
     * @description
     * Processes the given tasks and applies them to the provided code.
     *
     * @param {string} code - The TypeScript code to process.
     *
     * @returns {typeof code} - The updated TypeScript code after processing the tasks.
     */
    processTasks(code: string): typeof code;
    private getContentAutoUpdateWithoutTasks;
    processTasksByTask(code: string, task: IPrizmAstCodeTask): typeof code;
}
