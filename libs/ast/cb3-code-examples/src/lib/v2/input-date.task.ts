import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutDateCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutDateModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmDateModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmDateModule to PrizmInputLayoutDateModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateModule',
    moduleToFind: 'PrizmDateModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmDateModule to PrizmInputLayoutDateModule',
  }),
];
