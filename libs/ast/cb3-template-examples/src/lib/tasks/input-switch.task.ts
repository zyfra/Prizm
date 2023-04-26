// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAddCommentTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraInputSwitchTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-input-switch',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-toggle',
      }),
    ],
    inputs: {
      disabled: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: for pass disabled use pass by FormControl ',
        }),
      ],
      readonly: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: for pass readonly use pass by FormControl ',
        }),
      ],
      mini: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'size',
          setExactNewAttrName: true,
          value: 'm',
        }),
      ],

      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];
