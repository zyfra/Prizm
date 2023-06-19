import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraButtonCodeTasks: IPrizmAstCodeTask[] = [
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
