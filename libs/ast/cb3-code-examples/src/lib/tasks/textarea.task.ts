import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraTextareaCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputTextModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraTextareaModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraTextareaModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputTextModule',
    moduleToFind: 'ZyfraTextareaModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraTextareaModule',
  }),
];
