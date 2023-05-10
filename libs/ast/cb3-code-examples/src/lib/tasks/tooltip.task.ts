// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  IPrizmAstCodeTask,
  prizmAstCreateCodeTaskBy,
} from '@prizm-ui/ast/code';

export const ZyfraTooltipCodeTasks: IPrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmTooltipModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraTooltipModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraTooltipModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmTooltipModule',
    moduleToFind: 'ZyfraTooltipModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraTooltipModule',
  }),
];
