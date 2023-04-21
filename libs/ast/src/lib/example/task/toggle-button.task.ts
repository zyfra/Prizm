import {
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraToggleButtonTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-toggle-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-toggle',
      }),
    ],
    inputs: {
      onLabel: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO onLabel need set before this component',
        }),
      ],
      offLabel: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO offLabel need set before this component',
        }),
      ],
      disabled: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
          extraComment: 'TODO disabled need pass with FormControl',
        }),
      ],
      onIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'iconOn',
        }),
      ],
      offIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'iconOff',
        }),
      ],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];

export const ZyfraToggleButtonCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmToggleModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraToggleButtonModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraToggleButtonModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmToggleModule',
    moduleToFind: 'ZyfraToggleButtonModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraToggleButtonModule',
  }),
];
