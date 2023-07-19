import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const PrizmInputMultiSelectCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputMultiSelectModule'],
    targetImport: '@prizm-ui/components',
    targetNamedImports: ['PrizmMultiSelectModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR changed from PrizmMultiSelectModule to PrizmInputMultiSelectModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputMultiSelectModule',
    moduleToFind: 'PrizmMultiSelectModule',
    comment: 'PRIZM:MIGRATOR changed from PrizmMultiSelectModule to PrizmInputMultiSelectModule',
  }),
];
