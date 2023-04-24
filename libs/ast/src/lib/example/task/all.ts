import { ZyfraAccordionCodeTasks, ZyfraAccordionTemplateTasks } from './accordion.task';
import { ZyfraBreadcrumbCodeTasks, ZyfraBreadcrumbTemplateTasks } from './breadcrumb.task';
import { ZyfraButtonCodeTasks, ZyfraButtonTemplateTasks } from './button.task';
import { ZyfraCheckboxCodeTasks, ZyfraCheckboxTemplateTasks } from './checkbox.task';
import { PrizmTemplateTask } from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { ZyfraChipsCodeTasks, ZyfraChipsTasks } from './chips.task';
import { ZyfraDropdownCodeTasks, ZyfraDropdownTemplateTasks } from './dropdown.task';
import { ZyfraTooltipCodeTasks } from './tooltip.task';
import { ZyfraToggleButtonCodeTasks, ZyfraToggleButtonTemplateTasks } from './toggle-button.task';
import { ZyfraTabsCodeTasks, ZyfraTabsTemplateTasks } from './tabs.task';
import { ZyfraSplitButtonCodeTasks, ZyfraSplitButtonTemplateTasks } from './split-button.task';
import { ZyfraSpinnerCodeTasks, ZyfraSpinnerTemplateTasks } from './spinner.task';
import { ZyfraRadioCodeTasks, ZyfraRadioTemplateTasks } from './radio.task';
import { ZyfraMultiSelectCodeTasks, ZyfraMultiSelectTemplateTasks } from './multi-select.task';
import { ZyfraInputSwitchCodeTasks, ZyfraInputSwitchTemplateTasks } from './input-switch.task';
import { ZyfraInputCodeTasks, ZyfraInputTemplateTasks } from './input.task';
import { ZyfraInputNumberCodeTasks, ZyfraInputNumberTemplateTasks } from './input-number.task';

export const PRIZM_CB3_TO_PRIZM_CODE_TASKS: PrizmCodeTask[] = [
  ...ZyfraAccordionCodeTasks,
  ...ZyfraBreadcrumbCodeTasks,
  ...ZyfraButtonCodeTasks,
  ...ZyfraCheckboxCodeTasks,
  ...ZyfraChipsCodeTasks,
  ...ZyfraDropdownCodeTasks,
  ...ZyfraTooltipCodeTasks,
  ...ZyfraToggleButtonCodeTasks,
  ...ZyfraTabsCodeTasks,
  ...ZyfraSplitButtonCodeTasks,
  ...ZyfraSpinnerCodeTasks,
  ...ZyfraRadioCodeTasks,
  ...ZyfraMultiSelectCodeTasks,
  ...ZyfraInputSwitchCodeTasks,
  ...ZyfraInputCodeTasks,
  ...ZyfraInputNumberCodeTasks,
];

export const PRIZM_CB3_TO_PRIZM_TEMPLATE_TASKS: PrizmTemplateTask[] = [
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
