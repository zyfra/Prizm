// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateCodeTaskBy,
  PrizmAstCodeTask,
} from '@prizm-ui/ast/code';
import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

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

export const ZyfraChipsCodeTasks: PrizmAstCodeTask[] = [
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
