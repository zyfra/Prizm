// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateCodeTaskBy,
  PrizmAstCodeTask,
} from '@prizm-ui/ast/code';

import {
  prizmAstCreateActionBy,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';

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

export const ZyfraTooltipCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmTooltipModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraTooltipModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraTooltipModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmTooltipModule',
    moduleToFind: 'ZyfraTooltipModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraTooltipModule',
  }),
];
