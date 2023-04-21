import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { ZyfraInputTemplateTasks } from './input.task';

export const ZyfraCheckboxTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-checkbox',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-checkbox',
      }),
    ],
    inputs: {
      binary: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'checked',
        }),
      ],
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],

      disabledControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      value: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      checkboxIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      required: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      trueValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      falseValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];
