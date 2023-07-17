import { IPrizmAstCodeTask } from '@prizm-ui/ast/code';
import { PrizmInputSelectCodeTasks } from './input-select.task';
import { PrizmInputMultiSelectCodeTasks } from './input-multi-select.task';

export const PRIZM_UPDATE_V2_CODE_TASKS: IPrizmAstCodeTask[] = [
  ...PrizmInputSelectCodeTasks,
  ...PrizmInputMultiSelectCodeTasks,
];
