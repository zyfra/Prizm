import { PrizmAstCodeTask } from '../abstract';
import * as ts from 'typescript';
import { IPrizmAddImportsIfNeededCodeTask } from './model';
import { prizmAstAddImportIfNeeded } from './util';

export class PrizmAstAddImportsIfNeededCodeTask extends PrizmAstCodeTask<IPrizmAddImportsIfNeededCodeTask> {
  readonly type = 'add-imports-if-needed';

  public run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: IPrizmAddImportsIfNeededCodeTask['payload']
  ): ts.SourceFile {
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
