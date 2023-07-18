import { PrizmTemplateTask } from '@prizm-ui/ast';
import { PrizmInputSelectTemplateTasks } from './input-select.task';
import { PrizmInputMultiSelectTemplateTasks } from './input-multi-select.task';
import { PrizmHintTemplateTasks } from './hint.task';
import { PrizmTooltipTemplateTasks } from './tooltip.task';
import { PrizmInputDateTemplateTasks } from './input-date.task';
import { PrizmInputDateTimeTemplateTasks } from './input-date-time.task';
import { PrizmInputDateTimeRangeTemplateTasks } from './input-date-time-range.task';
import { PrizmInputTimeTemplateTasks } from './input-time.task';

export const PRIZM_UPDATE_V2_TEPMLATES_TASKS: PrizmTemplateTask[] = [
  ...PrizmInputSelectTemplateTasks,
  ...PrizmInputMultiSelectTemplateTasks,
  ...PrizmHintTemplateTasks,
  ...PrizmTooltipTemplateTasks,
  ...PrizmInputDateTemplateTasks,
  ...PrizmInputDateTimeTemplateTasks,
  ...PrizmInputDateTimeRangeTemplateTasks,
  ...PrizmInputTimeTemplateTasks,
];
