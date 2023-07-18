import { IPrizmAstCodeTask } from '@prizm-ui/ast/code';
import { PrizmInputSelectCodeTasks } from './input-select.task';
import { PrizmInputMultiSelectCodeTasks } from './input-multi-select.task';
import { PrizmInputLayoutDateCodeTasks } from './input-date.task';
import { PrizmInputLayoutDateTimeCodeTasks } from './input-date-time.task';
import { PrizmInputLayoutDateTimeRangeCodeTasks } from './input-date-time-range.task';
import { PrizmInputLayoutTimeCodeTasks } from './input-time.task';
import { PrizmInputLayoutMonthCodeTasks } from './input-month.task';
import { PrizmInputLayoutMonthRangeCodeTasks } from './input-month-range.task';

export const PRIZM_UPDATE_V2_CODE_TASKS: IPrizmAstCodeTask[] = [
  ...PrizmInputSelectCodeTasks,
  ...PrizmInputMultiSelectCodeTasks,
  ...PrizmInputLayoutDateCodeTasks,
  ...PrizmInputLayoutDateTimeCodeTasks,
  ...PrizmInputLayoutDateTimeRangeCodeTasks,
  ...PrizmInputLayoutTimeCodeTasks,
  ...PrizmInputLayoutMonthCodeTasks,
  ...PrizmInputLayoutMonthRangeCodeTasks,
];
