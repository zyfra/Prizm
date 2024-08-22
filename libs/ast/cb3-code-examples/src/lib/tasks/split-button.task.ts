import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraSplitButtonCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmButtonComponent'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraSplitButtonComponent'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraSplitButtonComponent',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmButtonComponent',
    moduleToFind: 'ZyfraSplitButtonComponent',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraSplitButtonComponent',
  }),
];
