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
  PrizmMoveContentToComponentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';

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

export const ZyfraAccordionCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmAccordionModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraAccordionModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from PrizmAccordionModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'ZyfraAccordionModule',
    moduleToFind: 'ZyfraAccordionModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from PrizmAccordionModule',
  }),
];
