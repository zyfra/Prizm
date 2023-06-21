import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraInputNumberCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputNumberModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraInputNumberModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraInputNumberModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputNumberModule',
    moduleToFind: 'ZyfraInputNumberModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraInputNumberModule',
  }),
];
