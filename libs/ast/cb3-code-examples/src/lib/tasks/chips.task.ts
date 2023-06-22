import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraChipsCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmChipsModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraChipModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraChipModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmChipsModule',
    moduleToFind: 'ZyfraChipModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraChipModule',
  }),
];
