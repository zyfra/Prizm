import {
  PrizmAddCommentTemplateTask,
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

export const ZyfraInputSwitchTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-input-switch',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-toggle',
      }),
    ],
    inputs: {
      disabled: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: for pass disabled use pass by FormControl ',
        }),
      ],
      readonly: [
        prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: for pass readonly use pass by FormControl ',
        }),
      ],
      mini: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'size',
          setExactNewAttrName: true,
          value: 'm',
        }),
      ],

      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {},
  },
];

export const ZyfraInputSwitchCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmToggleModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraInputSwitchModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraInputSwitchModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmToggleModule',
    moduleToFind: 'ZyfraInputSwitchModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraInputSwitchModule',
  }),
];
