import * as ts from 'typescript';
import { PrizmAstCodeTask } from '../abstract';
import { IPrizmAddImportsToNgModuleCodeTask } from './model';
import { prizmAstAddImportToNgModule } from './util';

export class PrizmAstAddImportsToNgModuleCodeTask extends PrizmAstCodeTask<IPrizmAddImportsToNgModuleCodeTask> {
  readonly type = 'add-imports-to-ng-module';

  public run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: IPrizmAddImportsToNgModuleCodeTask['payload']
  ): ts.SourceFile {
    return prizmAstAddImportToNgModule(
      context,
      sourceFile,
      payload.newModule,
      payload.comment,
      payload.moduleToFind
    );
  }
}
