import { IPrizmAstCodeTask } from './model';
import { PrizmAstAddImportsToNgModuleCodeTask } from './add-imports-to-ng-module';
import { PrizmAstAddImportsIfNeededCodeTask } from './add-imports';
import * as ts from 'typescript';

/**
 * @class PrizmAstCodeTaskProcessor
 * @description
 * A class responsible for processing a series of PrizmAstCodeTasks and applying
 * them to the given TypeScript code. It includes built-in tasks by default and allows
 * adding custom tasks as needed.
 */
export class PrizmAstCodeTaskProcessor {
  // Default built-in tasks
  readonly defaultTasks = [
    new PrizmAstAddImportsToNgModuleCodeTask(),
    new PrizmAstAddImportsIfNeededCodeTask(),
  ];

  /**
   * @constructor
   * @param {IPrizmAstCodeTask[]} tasks - An array of tasks to be processed.
   */
  constructor(private tasks: IPrizmAstCodeTask[]) {}

  /**
   * @function processTasks
   * @description
   * Processes the given tasks and applies them to the provided code.
   *
   * @param {string} code - The TypeScript code to process.
   *
   * @returns {typeof code} - The updated TypeScript code after processing the tasks.
   */
  public processTasks(code: string): typeof code {
    return this.tasks.reduce((base, task) => {
      return (base = this.processTasksByTask(base, task));
    }, code);
  }

  // public processTasks(code: string): typeof code {
  //   // Transformer function that applies the tasks to the source file
  //   const transformers: ts.TransformerFactory<ts.SourceFile>[] = this.tasks.reduce(
  //     (base, task) => {
  //       const service = this.defaultTasks.find(i => i.type === task.type);
  //       if (service) {
  //         base.push(
  //           context => (sourceFile): typeof sourceFile => {
  //             return service.run(context, sourceFile, task.payload as any);
  //           }
  //         )
  //       }
  //
  //       return base;
  //     },
  //     [] as ts.TransformerFactory<ts.SourceFile>[]
  //   )
  //
  //
  //   // Create a source file from the provided code
  //   const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);
  //
  //   // Apply the transformer to the source file
  //   const result = ts.transform(sourceFile, transformers);
  //   const updatedSourceFile = result.transformed[0];
  //   const printer = ts.createPrinter();
  //   const updatedCode = printer.printFile(updatedSourceFile);
  //
  //   return updatedCode;
  // }

  // TODO delete duplicates, think about optimization
  private getContentAutoUpdateWithoutTasks(code: string) {
    // Transformer function that applies the tasks to the source file
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): typeof sourceFile => {
        return sourceFile;
      };

    // Create a source file from the provided code
    const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);

    // Apply the transformer to the source file
    const result = ts.transform(sourceFile, [transformer]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);
    return updatedCode;
  }
  public processTasksByTask(code: string, task: IPrizmAstCodeTask): typeof code {
    const taskService = this.defaultTasks.find(t => t.type === task.type);
    if (!taskService) return code;

    const initialFile = this.getContentAutoUpdateWithoutTasks(code);

    // Transformer function that applies the tasks to the source file
    const transformer: ts.TransformerFactory<ts.SourceFile> =
      context =>
      (sourceFile): typeof sourceFile => {
        return taskService.run(context, sourceFile, task.payload as any);
      };

    // Create a source file from the provided code
    const sourceFile = ts.createSourceFile('test.ts', code, ts.ScriptTarget.Latest, true);

    // Apply the transformer to the source file
    const result = ts.transform(sourceFile, [transformer]);
    const updatedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    const updatedCode = printer.printFile(updatedSourceFile);
    return initialFile !== updatedCode ? updatedCode : code;
  }
}
