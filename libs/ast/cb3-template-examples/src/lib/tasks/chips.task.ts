// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

export const ZyfraChipsTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-chip',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-chips-item',
      }),
    ],
    inputs: {
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
      removable: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'deletable',
        }),
      ],

      icon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      image: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      removeIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onRemove: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'deleted',
        }),
      ],
    },
  },
];
