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
    targetNamedImports: ['PrizmInputTimeModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmInputTimeModule to PrizmInputLayoutTimeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutTimeModule',
    moduleToFind: 'PrizmInputTimeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputTimeModule to PrizmInputLayoutTimeModule',
  }),
];
