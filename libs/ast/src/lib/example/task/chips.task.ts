import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraChipsTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-chip',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-chips-item',
      }),
    ],
    inputs: {
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
      removable: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'deletable',
        }),
      ],

      icon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      image: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      removeIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onRemove: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'deleted',
        }),
      ],
    },
  },
];

export const ZyfraChipsCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmChipsModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraChipModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraChipModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmChipsModule',
    moduleToFind: 'ZyfraChipModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraChipModule',
  }),
];
