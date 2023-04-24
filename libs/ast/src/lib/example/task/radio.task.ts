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
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';

export const ZyfraRadioTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-radio-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-radio-button',
      }),
    ],
    inputs: {
      formControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      formControlName: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'clickEvent',
        }),
      ],
      onBlur: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'blurEvent',
        }),
      ],
      onFocus: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'focusEvent',
        }),
      ],
    },
  },
];

export const ZyfraRadioCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmLabelModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraRadioButtonModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraRadioButtonModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmLabelModule',
    moduleToFind: 'ZyfraRadioButtonModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraRadioButtonModule',
  }),
];
