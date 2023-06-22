import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraInputCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputTextModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraInputModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraInputModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputTextModule',
    moduleToFind: 'ZyfraInputModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraInputModule',
  }),
];
