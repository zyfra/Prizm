import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputSelectCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputSelectModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmSelectModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmSelectModule to PrizmInputSelectModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputSelectModule',
    moduleToFind: 'PrizmSelectModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmSelectModule to PrizmInputSelectModule',
  }),
];
