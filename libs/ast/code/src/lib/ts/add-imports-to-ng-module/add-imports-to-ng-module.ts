import * as ts from 'typescript';
import { PrizmAstCodeTask } from '../abstract';
import { IPrizmAddImportsToNgModuleCodeTask } from './model';
import { prizmAstAddImportToNgModule } from './util';

/**
 * @class PrizmAstAddImportsToNgModuleCodeTask
 * @extends {PrizmAstCodeTask<IPrizmAddImportsToNgModuleCodeTask>}
 *
 * @description
 * A class that represents a task for adding imports to an Angular NgModule.
 * It checks if the required import(s) already exist and adds them if they don't.
 * It utilizes the prizmAstAddImportToNgModule utility function to perform the actual transformation.
 */
export class PrizmAstAddImportsToNgModuleCodeTask extends PrizmAstCodeTask<IPrizmAddImportsToNgModuleCodeTask> {
  // Task type identifier
  readonly type = 'add-imports-to-ng-module';

  /**
   * @function run
   * @description
   * Runs the task to add imports to an Angular NgModule.
   *
   * @param {ts.TransformationContext} context - The transformation context.
   * @param {ts.SourceFile} sourceFile - The source file to be transformed.
   * @param {IPrizmAddImportsToNgModuleCodeTask['payload']} payload - The payload that contains the information about the imports.
   *
   * @returns {ts.SourceFile} - The transformed source file.
   */
  public run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: IPrizmAddImportsToNgModuleCodeTask['payload']
  ): ts.SourceFile {
    // Call the utility function to add the import to the NgModule and return the result
    return prizmAstAddImportToNgModule(
      context,
      sourceFile,
      payload.newModule,
      payload.comment,
      payload.moduleToFind
    );
  }
}
