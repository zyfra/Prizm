import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutDateTimeRangeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutDateTimeRangeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputDateTimeRangeModule'],
    commentBeforeImport:
      'PRIZM:MIGRATOR changed from PrizmInputDateTimeRangeModule to PrizmInputLayoutDateTimeRangeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateTimeRangeModule',
    moduleToFind: 'PrizmInputDateTimeRangeModule',
    comment:
      'PRIZM:MIGRATOR changed from PrizmInputDateTimeRangeModule to PrizmInputLayoutDateTimeRangeModule',
  }),
];
