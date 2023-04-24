// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  PrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

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
