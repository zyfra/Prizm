// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  PrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraDropdownCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmSelectModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraDropdownModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraDropdownModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmSelectModule',
    moduleToFind: 'ZyfraDropdownModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraDropdownModule',
  }),
];
