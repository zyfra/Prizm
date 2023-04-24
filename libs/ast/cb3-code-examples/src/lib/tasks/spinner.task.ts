// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  PrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraSpinnerCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmSpinnerModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraSpinnerComponent'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraSpinnerComponent',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmSpinnerModule',
    moduleToFind: 'ZyfraSpinnerComponent',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraSpinnerComponent',
  }),
];
