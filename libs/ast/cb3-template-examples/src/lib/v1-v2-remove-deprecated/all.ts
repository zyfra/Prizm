import { PrizmTemplateTask } from '@prizm-ui/ast';
import { PrizmInputSelectTemplateTasks } from './input-select.task';
import { PrizmInputMultiSelectTemplateTasks } from './input-multi-select.task';

export const PRIZM_UPDATE_V2_TEPMLATES_TASKS: PrizmTemplateTask[] = [
  ...PrizmInputSelectTemplateTasks,
  ...PrizmInputMultiSelectTemplateTasks,
];
