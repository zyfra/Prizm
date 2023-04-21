import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraSpinnerTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-spinner',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-spinner',
      }),
    ],
    inputs: {
      size: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          needFixApi: true,
          newAttrName: 'size',
          setExactNewAttrName: true,
          value: 'l',
        }),
      ],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      strokeWidth: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      fill: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      animationDuration: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      color: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];
