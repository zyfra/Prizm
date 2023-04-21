import {
  PrizmAstAddImportsIfNeededCodeTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveContentToComponentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';
import { PrizmCodeTask } from '../../task/ts/model';
import { prizmAstCreateCodeTaskBy } from '../../task/ts/util';

export const ZyfraAccordionTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-accordion',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-accordion',
      }),
    ],
    inputs: {
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      expandIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      collapseIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      multiple: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      activeIndexChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onOpen: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
  },
  {
    selector: 'zyfra-accordion-tab',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-accordion-item',
      }),
      prizmAstCreateActionBy(PrizmMoveContentToComponentTemplateTask, {
        name: 'ng-template',
        attrs: {
          prizmAccordionContent: null,
        },
        children: [],
      }),
    ],
    inputs: {
      header: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'title',
        }),
      ],
      isExpanded: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'selected',
        }),
      ],
      cache: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      transitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      selectedChange: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'isExpandedChange',
        }),
      ],
    },
  },
];

export const ZyfraAccordionCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmAccordionModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraAccordionModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for PrizmAccordionModule',
  }),
];
