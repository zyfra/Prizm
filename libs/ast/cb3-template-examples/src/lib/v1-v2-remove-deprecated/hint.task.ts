import {
  prizmAstCreateActionBy,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const PrizmHintTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: [
      {
        type: 'byAttr',
        attrs: {
          prizmHint: undefined,
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
          newAttrName: 'prizmHintShowed',
        }),
      ],
    },
    finishTasks: [],
  },
];
