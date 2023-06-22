import { PrizmAstCodeTask } from '../abstract';
import * as ts from 'typescript';
import { IPrizmAddImportsIfNeededCodeTask } from './model';
import { prizmAstAddImportIfNeeded } from './util';

/**
 * @class PrizmAstAddImportsIfNeededCodeTask
 * @extends {PrizmAstCodeTask<IPrizmAddImportsIfNeededCodeTask>}
 *
 * @description
 * A class that represents a task for adding imports if needed.
 * It checks if the required import(s) already exist and adds them if they don't.
 * It utilizes the prizmAstAddImportIfNeeded utility function to perform the actual transformation.
 */
export class PrizmAstAddImportsIfNeededCodeTask extends PrizmAstCodeTask<IPrizmAddImportsIfNeededCodeTask> {
  // Task type identifier
  readonly type = 'add-imports-if-needed';

  /**
   * @function run
   * @description
   * Runs the task to add imports if needed.
   *
   * @param {ts.TransformationContext} context - The transformation context.
   * @param {ts.SourceFile} sourceFile - The source file to be transformed.
   * @param {IPrizmAddImportsIfNeededCodeTask['payload']} payload - The payload that contains the information about the imports.
   *
   * @returns {ts.SourceFile} - The transformed source file.
   */
  public run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: IPrizmAddImportsIfNeededCodeTask['payload']
  ): ts.SourceFile {
    // Call the utility function to add the import if needed and return the result
    return prizmAstAddImportIfNeeded(
      context,
      sourceFile,
      payload.namedImports,
      payload.importToAdd,
      payload.targetImport,
      payload.targetNamedImports,
      payload.commentBeforeImport
    );
  }
}
