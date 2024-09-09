import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraSpinnerCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmSpinnerComponent'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraSpinnerComponent'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraSpinnerComponent',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmSpinnerComponent',
    moduleToFind: 'ZyfraSpinnerComponent',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraSpinnerComponent',
  }),
];
