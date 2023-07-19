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
    targetNamedImports: ['PrizmInputDateModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmInputDateModule to PrizmInputLayoutDateModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputLayoutDateModule',
    moduleToFind: 'PrizmInputDateModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmInputDateModule to PrizmInputLayoutDateModule',
  }),
];
