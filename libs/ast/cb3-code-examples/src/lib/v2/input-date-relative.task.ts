import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputLayoutDateRelativeCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputLayoutDateRelativeModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmInputDateRelativeModule'],
    commentBeforeImport:
      'PRIZM:MIGRATOR changed from PrizmInputDateRelativeModule to PrizmInputLayoutDateRelativeModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateRelativeModule',
    moduleToFind: 'PrizmInputDateRelativeModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputDateRelativeModule to PrizmInputLayoutDateRelativeModule',
  }),
];
