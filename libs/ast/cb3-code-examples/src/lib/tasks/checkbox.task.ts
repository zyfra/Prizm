// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  PrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraCheckboxCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmCheckboxModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraCheckBoxModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraCheckBoxModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmCheckboxModule',
    moduleToFind: 'ZyfraCheckBoxModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraCheckBoxModule',
  }),
];
