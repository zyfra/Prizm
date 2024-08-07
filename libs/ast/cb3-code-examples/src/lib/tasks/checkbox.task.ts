import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraCheckboxCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmCheckboxComponent'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraCheckBoxModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraCheckBoxModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmCheckboxComponent',
    moduleToFind: 'ZyfraCheckBoxModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraCheckBoxModule',
  }),
];
