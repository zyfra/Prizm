import * as ts from 'typescript';

export interface PrizmCodeTaskAction<TYPE extends string> {
  type: TYPE;
  payload?: unknown;
}
export type PrizmCodeTask = {
  type: string;
  payload: unknown;
};

export interface IPrizmAstTaskCode<T extends PrizmCodeTaskAction<any>> {
  readonly type: T['type'];

  run(context: ts.TransformationContext, sourceFile: ts.SourceFile, payload: T['payload']): ts.SourceFile;
}
