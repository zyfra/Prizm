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

export const ZyfraMultiSelectTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-multiselect',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-multi-select',
      }),
    ],
    inputs: {
      options: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'items',
          needFixApi: true,
        }),
      ],
      dropdownIcon: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'icon',
          needFixApi: true,
        }),
      ],
      showClear: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'forceClear',
        }),
      ],

      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      panelStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      panelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      disabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      group: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filterPlaceHolder: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filterLocale: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filterValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      overlayVisible: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      appendTo: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      dataKey: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      displaySelectedLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      maxSelectedLabels: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      selectionLimit: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      selectedItemsLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showToggleAll: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      emptyFilterMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      emptyMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      resetFilterOnHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      optionLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      optionValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      optionDisabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      optionGroupLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      optionGroupChildren: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showHeader: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      autoZIndex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      baseZIndex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filterBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      virtualScroll: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      itemSize: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      hideTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaFilterLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      filterMatchMode: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltip: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltipPosition: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltipPositionStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tooltipStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      autofocusFilter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      display: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      scrollHeight: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      defaultLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onFocus: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onBlur: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onPanelShow: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      onPanelHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],

      onClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'click',
        }),
      ],
    },
  },
];

export const ZyfraMultiSelectCodeTasks: PrizmAstCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmMultiSelectModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraMultiSelectModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraMultiSelectModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmMultiSelectModule',
    moduleToFind: 'ZyfraMultiSelectModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraMultiSelectModule',
  }),
];
