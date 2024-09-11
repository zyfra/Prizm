import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraInputSwitchCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmToggleComponent'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraInputSwitchModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraInputSwitchModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmToggleComponent',
    moduleToFind: 'ZyfraInputSwitchModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraInputSwitchModule',
  }),
];
