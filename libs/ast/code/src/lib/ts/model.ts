import * as ts from 'typescript';

export interface PrizmAstCodeTaskAction<TYPE extends string> {
  type: TYPE;
  payload?: unknown;
}
export type IPrizmAstCodeTask = {
  type: string;
  payload: unknown;
};

export interface IPrizmAstTaskCode<T extends PrizmAstCodeTaskAction<any>> {
  readonly type: T['type'];

  run(context: ts.TransformationContext, sourceFile: ts.SourceFile, payload: T['payload']): ts.SourceFile;
}
