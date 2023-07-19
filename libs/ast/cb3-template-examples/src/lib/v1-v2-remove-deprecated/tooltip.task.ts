import {
  prizmAstCreateActionBy,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const PrizmTooltipTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: [
      {
        type: 'byAttr',
        attrs: {
          prizmTooltip: undefined,
        },
      },
    ],
    tasks: [],
    defaultInputs: {},
    inputs: {
      prizmHintShow: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
    },
    outputs: {
      prizmHoverChange: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmTooltipShowed',
        }),
      ],
    },
    finishTasks: [],
  },
];
