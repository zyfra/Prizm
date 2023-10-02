import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraAccordionCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmAccordionModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraAccordionModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from PrizmAccordionModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmAccordionModule',
    moduleToFind: 'ZyfraAccordionModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from PrizmAccordionModule',
  }),
];
