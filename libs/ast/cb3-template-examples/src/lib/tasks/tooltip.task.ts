// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  prizmAstCreateActionBy,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraTooltipTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: [
      {
        type: 'byAttr',
        attrs: {
          zyfraTooltip: undefined,
        },
      },
    ],
    tasks: [],
    inputs: {
      zyfraTooltip: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmTooltip',
        }),
      ],
      zyfraTooltipShow: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmHintShow',
        }),
      ],
      zyfraTooltipContext: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmHintContext',
        }),
      ],
      zyfraTooltipDelay: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmTooltipShowDelay',
        }),
      ],
      zyfraTooltipPosition: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmHintDirection',
          needFixApi: true,
        }),
      ],
      zyfraTooltipColor: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      zyfraTooltipClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      zyfraTooltipOverflowText: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      zyfraTooltipShowChange: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmHoveredChange',
        }),
      ],
    },
  },
];
