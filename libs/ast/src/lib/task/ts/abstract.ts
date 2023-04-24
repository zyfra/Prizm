import * as ts from 'typescript';
import { IPrizmAstTaskCode, PrizmCodeTaskAction } from './model';

export abstract class PrizmAstCodeTask<T extends PrizmCodeTaskAction<any>> implements IPrizmAstTaskCode<T> {
  abstract type: T['type'];
  public readonly payload: T['payload'];

  public create(payload: T['payload']): T {
    return {
      type: this.type,
      payload: payload,
    } as T;
  }

  abstract run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: T['payload']
  ): ts.SourceFile;
}
