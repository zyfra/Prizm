import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraToggleButtonTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-toggle-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-toggle',
      }),
    ],
    inputs: {
      onLabel: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO onLabel need set before this component',
        }),
      ],
      offLabel: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO offLabel need set before this component',
        }),
      ],
      disabled: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO disabled need pass with FormControl',
        }),
      ],
      onIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'iconOn',
        }),
      ],
      offIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'iconOff',
        }),
      ],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];
