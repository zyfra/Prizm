// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmCommentContentTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraTabsTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-tab-view',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-tabs',
      }),
    ],
    inputs: {
      activeIndex: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'activeTabIndex',
        }),
      ],

      controlClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      activeIndexChange: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'activeTabIndexChange',
        }),
      ],
      onClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
  },
  {
    selector: 'zyfra-tab-panel',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-tab',
      }),
      prizmAstCreateActionBy(PrizmCommentContentTemplateTask, {}),
    ],
    inputs: {
      header: [
        prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {
          notClearChildren: true,
        }),
      ],
      tooltip: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmTooltip',
        }),
      ],
      tooltipPosition: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'prizmHintDirection',
          needFixApi: true,
        }),
      ],
      selected: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      headerStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      headerStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      cache: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      leftIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      rightIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltipStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltipPositionStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      propChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
  },
];
