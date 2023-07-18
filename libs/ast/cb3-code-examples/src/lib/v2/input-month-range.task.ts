import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutMonthRangeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutMonthRangeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputMonthRangeModule'],
    commentBeforeImport:
      'PRIZM:MIGRATOR changed from PrizmInputMonthRangeModule to PrizmInputLayoutMonthRangeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutMonthRangeModule',
    moduleToFind: 'PrizmInputMonthRangeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputMonthRangeModule to PrizmInputLayoutMonthRangeModule',
  }),
];
