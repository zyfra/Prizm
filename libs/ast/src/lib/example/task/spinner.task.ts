import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraSpinnerTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-spinner',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-spinner',
      }),
    ],
    inputs: {
      size: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          needFixApi: true,
          newAttrName: 'size',
          setExactNewAttrName: true,
          value: 'l',
        }),
      ],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      strokeWidth: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      fill: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      animationDuration: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      color: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];

export const ZyfraSpinnerCodeTasks: PrizmCodeTask[] = [
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
