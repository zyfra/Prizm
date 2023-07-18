import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutMonthCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutMonthModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputMonthModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmInputMonthModule to PrizmInputLayoutMonthModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutMonthModule',
    moduleToFind: 'PrizmInputMonthModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputMonthModule to PrizmInputLayoutMonthModule',
  }),
];
