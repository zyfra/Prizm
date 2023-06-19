import {
  PrizmAddAttributeTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraButtonTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'button',
      }),
      prizmAstCreateActionBy(PrizmAddAttributeTemplateTask, {
        attr: 'prizmButton',
      }),
    ],
    inputs: {
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
      iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      badge: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onBlur: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'blur',
        }),
      ],
      onFocus: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'focus',
        }),
      ],
      onClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'click',
        }),
      ],
    },
  },
];
