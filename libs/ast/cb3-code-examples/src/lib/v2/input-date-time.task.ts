import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutDateTimeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutDateTimeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputDateTimeModule'],
    commentBeforeImport:
      'PRIZM:MIGRATOR changed from PrizmInputDateTimeModule to PrizmInputLayoutDateTimeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateTimeModule',
    moduleToFind: 'PrizmInputDateTimeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputDateTimeModule to PrizmInputLayoutDateTimeModule',
  }),
];
