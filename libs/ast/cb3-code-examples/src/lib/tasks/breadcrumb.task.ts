// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraBreadcrumbCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmBreadcrumbsModule'],
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
