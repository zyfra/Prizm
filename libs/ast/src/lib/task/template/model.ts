import { PrizmNode } from './task';

export interface PrizmTemplateTaskAction<TYPE extends string> {
  type: TYPE;
  payload?: unknown;
}

export enum PrizmAstTemplateAttributeType {
  input = 'input',
  inputVar = 'input-variable',
  inputOutput = 'input-output',
  output = 'output',
}

export interface PrizmAstTemplateContext {
  attrName?: string | null;
  originName?: string | null;
  type?: PrizmAstTemplateAttributeType | null;
  runIn: 'inputs' | 'outputs' | 'tasks';
}

export interface IPrizmAstTaskTemplate<T extends PrizmTemplateTaskAction<any>> {
  readonly type: T['type'];

  run(node: PrizmNode, payload: T['payload'], context: PrizmAstTemplateContext): PrizmNode;
}
