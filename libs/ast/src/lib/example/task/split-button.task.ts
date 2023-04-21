import {
  PrizmAddAttributeTemplateTask,
  PrizmAddCommentTemplateTask,
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraSplitButtonTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-split-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-split-button',
      }),
    ],
    inputs: {
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
      icon: [
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO need fix api for pass right icon',
        }),
      ],
      iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      menuStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      menuStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      appendTo: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      dir: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      hideTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      model: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO use dropdown-host component to show children menus',
        }),
      ],
    },
    outputs: {
      onDropdownClick: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO use dropdown-host component to catch event for change (onDropdownClick)',
        }),
      ],
      onClick: [
        prizmAstCreateActionBy(PrizmAddAttributeTemplateTask, {
          attr: '(clickIcon)',
          passValue: true,
        }),
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'clickButton',
        }),
      ],
    },
  },
];

export const ZyfraSplitButtonCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmButtonModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraSplitButtonComponent'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraSplitButtonComponent',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmButtonModule',
    moduleToFind: 'ZyfraSplitButtonComponent',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraSplitButtonComponent',
  }),
];
