// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrizmTemplateTask } from '@prizm-ui/ast';
import { ZyfraAccordionTemplateTasks } from './accordion.task';
import { ZyfraBreadcrumbTemplateTasks } from './breadcrumb.task';
import { ZyfraButtonTemplateTasks } from './button.task';
import { ZyfraCheckboxTemplateTasks } from './checkbox.task';
import { ZyfraChipsTasks } from './chips.task';
import { ZyfraDropdownTemplateTasks } from './dropdown.task';
import { ZyfraToggleButtonTemplateTasks } from './toggle-button.task';
import { ZyfraTabsTemplateTasks } from './tabs.task';
import { ZyfraSplitButtonTemplateTasks } from './split-button.task';
import { ZyfraSpinnerTemplateTasks } from './spinner.task';
import { ZyfraRadioTemplateTasks } from './radio.task';
import { ZyfraMultiSelectTemplateTasks } from './multi-select.task';
import { ZyfraInputSwitchTemplateTasks } from './input-switch.task';
import { ZyfraInputTemplateTasks } from './input.task';
import { ZyfraInputNumberTemplateTasks } from './input-number.task';
import { ZyfraTooltipTemplateTasks } from './tooltip.task';
import { ZyfraTextareaTemplateTasks } from './textarea.task';

export const PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS: PrizmTemplateTask[] = [
  ...ZyfraTextareaTemplateTasks,
  ...ZyfraTooltipTemplateTasks,
  ...ZyfraAccordionTemplateTasks,
  ...ZyfraBreadcrumbTemplateTasks,
  ...ZyfraButtonTemplateTasks,
  ...ZyfraCheckboxTemplateTasks,
  ...ZyfraChipsTasks,
  ...ZyfraDropdownTemplateTasks,
  ...ZyfraToggleButtonTemplateTasks,
  ...ZyfraTabsTemplateTasks,
  ...ZyfraSplitButtonTemplateTasks,
  ...ZyfraSpinnerTemplateTasks,
  ...ZyfraRadioTemplateTasks,
  ...ZyfraMultiSelectTemplateTasks,
  ...ZyfraInputSwitchTemplateTasks,
  ...ZyfraInputTemplateTasks,
  ...ZyfraInputNumberTemplateTasks,
];
