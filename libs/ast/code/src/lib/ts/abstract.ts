import * as ts from 'typescript';
import { IPrizmAstTaskCode, PrizmAstCodeTaskAction } from './model';

export abstract class PrizmAstCodeTask<T extends PrizmAstCodeTaskAction<any>>
  implements IPrizmAstTaskCode<T>
{
  abstract type: T['type'];
  public readonly payload: T['payload'];

  public create(payload: T['payload']): T {
    return {
      type: this.type,
      payload: payload,
    } as T;
  }

  public abstract run(
    context: ts.TransformationContext,
    sourceFile: ts.SourceFile,
    payload: T['payload']
  ): ts.SourceFile;
}
