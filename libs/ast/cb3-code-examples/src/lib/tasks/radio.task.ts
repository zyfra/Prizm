import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraRadioCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmRadioButtonComponent'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraRadioButtonModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraRadioButtonModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmRadioButtonComponent',
    moduleToFind: 'ZyfraRadioButtonModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraRadioButtonModule',
  }),
];
