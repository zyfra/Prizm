import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutDateRangeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutDateRangeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputDateRangeModule'],
    commentBeforeImport:
      'PRIZM:MIGRATOR changed from PrizmInputDateRangeModule to PrizmInputLayoutDateRangeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateRangeModule',
    moduleToFind: 'PrizmInputDateRangeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputDateRangeModule to PrizmInputLayoutDateRangeModule',
  }),
];
