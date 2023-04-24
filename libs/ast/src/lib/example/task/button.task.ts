// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateCodeTaskBy,
  PrizmAstCodeTask,
} from '@prizm-ui/ast/code';
import {
  PrizmAddAttributeTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';

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

export const ZyfraButtonCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmButtonModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraButtonModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraButtonModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmButtonModule',
    moduleToFind: 'ZyfraButtonModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraButtonModule',
  }),
];
