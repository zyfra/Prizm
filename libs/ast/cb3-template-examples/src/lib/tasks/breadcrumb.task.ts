import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraBreadcrumbTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-breadcrumb',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-breadcrumbs',
      }),
    ],
    inputs: {
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      home: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      items: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'breadcrumbs',
          needFixApi: true,
        }),
      ],
    },
    outputs: {
      onItemClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'breadcrumbChange',
          needFixApi: true,
        }),
      ],
    },
  },
];
