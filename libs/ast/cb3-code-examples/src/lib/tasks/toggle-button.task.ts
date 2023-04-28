// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraToggleButtonCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmToggleModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraToggleButtonModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraToggleButtonModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmToggleModule',
    moduleToFind: 'ZyfraToggleButtonModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraToggleButtonModule',
  }),
];
