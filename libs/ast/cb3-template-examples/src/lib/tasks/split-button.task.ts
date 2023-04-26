// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  PrizmAddAttributeTemplateTask,
  PrizmAddCommentTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

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
