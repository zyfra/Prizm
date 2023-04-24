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
} from '../../task';

export const ZyfraCheckboxTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-checkbox',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-checkbox',
      }),
    ],
    inputs: {
      binary: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'checked',
        }),
      ],
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],

      disabledControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      value: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      checkboxIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      required: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      trueValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      falseValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];

export const ZyfraCheckboxCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmCheckboxModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraCheckBoxModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraCheckBoxModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmCheckboxModule',
    moduleToFind: 'ZyfraCheckBoxModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraCheckBoxModule',
  }),
];
