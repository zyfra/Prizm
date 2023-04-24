// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraRadioTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-radio-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-radio-button',
      }),
    ],
    inputs: {
      formControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      formControlName: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'clickEvent',
        }),
      ],
      onBlur: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'blurEvent',
        }),
      ],
      onFocus: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'focusEvent',
        }),
      ],
    },
  },
];
