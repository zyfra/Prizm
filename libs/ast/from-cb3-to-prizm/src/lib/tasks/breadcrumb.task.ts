// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateCodeTaskBy,
  PrizmAstCodeTask,
} from '@prizm-ui/ast/code';
import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

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

export const ZyfraBreadcrumbCodeTasks: PrizmAstCodeTask[] = [
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
