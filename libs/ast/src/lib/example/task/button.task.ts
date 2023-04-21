import {
  PrizmAddAttributeTemplateTask,
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

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

export const ZyfraButtonCodeTasks: PrizmCodeTask[] = [
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
