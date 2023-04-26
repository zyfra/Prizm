import { PrizmTemplateNode, PrizmTemplateTask, PrizmTemplateTaskProcessor } from './task';
import { PrizmTemplateTaskStorage } from './task-storage';

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
  processor: PrizmTemplateTaskProcessor;
  type?: PrizmAstTemplateAttributeType | null;
  runIn: 'inputs' | 'outputs' | 'tasks';
  sourceNode: PrizmTemplateNode;
  task: PrizmTemplateTask;
  // targetNode?: PrizmTemplateNode;
  storage: PrizmTemplateTaskStorage;
}

export interface IPrizmAstTaskTemplate<T extends PrizmTemplateTaskAction<any>> {
  readonly type: T['type'];

  run(node: PrizmTemplateNode, payload: T['payload'], context: PrizmAstTemplateContext): PrizmTemplateNode;
}
