import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutTimeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutTimeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmTimeModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmTimeModule to PrizmInputLayoutTimeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutTimeModule',
    moduleToFind: 'PrizmTimeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmTimeModule to PrizmInputLayoutTimeModule',
  }),
];
