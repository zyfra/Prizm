import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraMultiSelectCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmMultiSelectModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraMultiSelectModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraMultiSelectModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmMultiSelectModule',
    moduleToFind: 'ZyfraMultiSelectModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraMultiSelectModule',
  }),
];
