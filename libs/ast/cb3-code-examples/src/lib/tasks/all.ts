import { IPrizmAstCodeTask } from '@prizm-ui/ast/code';
import { ZyfraAccordionCodeTasks } from './accordion.task';
import { ZyfraBreadcrumbCodeTasks } from './breadcrumb.task';
import { ZyfraButtonCodeTasks } from './button.task';
import { ZyfraCheckboxCodeTasks } from './checkbox.task';
import { ZyfraChipsCodeTasks } from './chips.task';
import { ZyfraDropdownCodeTasks } from './dropdown.task';
import { ZyfraTooltipCodeTasks } from './tooltip.task';
import { ZyfraToggleButtonCodeTasks } from './toggle-button.task';
import { ZyfraTabsCodeTasks } from './tabs.task';
import { ZyfraSplitButtonCodeTasks } from './split-button.task';
import { ZyfraSpinnerCodeTasks } from './spinner.task';
import { ZyfraRadioCodeTasks } from './radio.task';
import { ZyfraMultiSelectCodeTasks } from './multi-select.task';
import { ZyfraInputSwitchCodeTasks } from './input-switch.task';
import { ZyfraInputCodeTasks } from './input.task';
import { ZyfraInputNumberCodeTasks } from './input-number.task';
import { ZyfraTextareaCodeTasks } from './textarea.task';

export const PRIZM_CB3_TO_PRIZM_CODE_TASKS: IPrizmAstCodeTask[] = [
  ...ZyfraTextareaCodeTasks,
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
