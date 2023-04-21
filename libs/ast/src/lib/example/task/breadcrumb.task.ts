import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraBreadcrumbTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-breadcrumb',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-breadcrumbs',
      }),
    ],
    inputs: {
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      home: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      items: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'breadcrumbs',
          needFixApi: true,
        }),
      ],
    },
    outputs: {
      onItemClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'breadcrumbChange',
          needFixApi: true,
        }),
      ],
    },
  },
];

export const ZyfraBreadcrumbCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmAccordionModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraBreadcrumbModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from PrizmBreadcrumbsModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmBreadcrumbsModule',
    moduleToFind: 'ZyfraBreadcrumbModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from PrizmBreadcrumbsModule',
  }),
];
