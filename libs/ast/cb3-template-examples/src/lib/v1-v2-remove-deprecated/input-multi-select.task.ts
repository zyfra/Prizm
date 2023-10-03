import {
  PrizmAddChildrenTemplateTask,
  prizmAstCreateActionBy,
  PrizmCallWithNewSourceTemplateTask,
  PrizmChangeNameTemplateTask,
  PrizmRenameTemplateTask,
  PrizmRunTasksOnNodeTemplateTask,
  PrizmSaveToCallOnDemandTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

const formControl = ['prizm-input-multi-select', 'formControl'].join('::');
const ngModel = ['prizm-input-multi-select', 'ngModel'].join('::');

const nameDropdownWidth = ['prizm-input-multi-select', 'dropdownWidth'].join('::');
const nameEmptyContent = ['prizm-input-multi-select', 'emptyContent'].join('::');
const nameIcon = ['prizm-input-multi-select', 'icon'].join('::');
const nameIdentityMatcher = ['prizm-input-multi-select', 'identityMatcher'].join('::');
const isChipsDeletable = ['prizm-input-multi-select', 'isChipsDeletable'].join('::');
const nameItems = ['prizm-input-multi-select', 'items'].join('::');
const nameMaxDropdownHeight = ['prizm-input-multi-select', 'maxDropdownHeight'].join('::');
const nameMinDropdownHeight = ['prizm-input-multi-select', 'minDropdownHeight'].join('::');
const nameNullContent = ['prizm-input-multi-select', 'nullContent'].join('::');
const namePlaceholder = ['prizm-input-multi-select', 'placeholder'].join('::');
const nameSearchMatcher = ['prizm-input-multi-select', 'searchMatcher'].join('::');
const searchable = ['prizm-input-multi-select', 'searchable'].join('::');
const selectAllItem = ['prizm-input-multi-select', 'selectAllItem'].join('::');
const stringify = ['prizm-input-multi-select', 'stringify'].join('::');
const valueTemplate = ['prizm-input-multi-select', 'valueTemplate'].join('::');
const search = ['prizm-input-multi-select', 'search'].join('::');
const searchOutput = ['prizm-input-multi-select', 'output-search'].join('::');

export const PrizmInputMultiSelectTemplateTasks: PrizmTemplateTask[] = [
  {
    // Найти элемент по селектору
    selector: 'prizm-multi-select',
    tasks: [
      // Заменить селектор
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      // Добавить потомка нового
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-multi-select',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    inputs: {
      // при наличии input параметра перенести его потомку созданному
      dropdownWidth: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameDropdownWidth,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'dropdownWidth',
          }),
        }),
      ],
      // ... перенести при наличии formControl созданному потомку
      formControl: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: formControl,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControl',
          }),
        }),
      ],
      ngModel: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: ngModel,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'ngModel',
          }),
        }),
      ],
      emptyContent: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameEmptyContent,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'emptyContent',
          }),
        }),
      ],
      icon: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameIcon,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'icon',
          }),
        }),
      ],
      identityMatcher: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameIdentityMatcher,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'identityMatcher',
          }),
        }),
      ],
      isChipsDeletable: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: isChipsDeletable,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'isChipsDeletable',
          }),
        }),
      ],
      items: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameItems,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'items',
          }),
        }),
      ],
      maxDropdownHeight: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameMaxDropdownHeight,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'maxDropdownHeight',
          }),
        }),
      ],
      minDropdownHeight: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameMinDropdownHeight,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'minDropdownHeight',
          }),
        }),
      ],
      nullContent: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameNullContent,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'nullContent',
          }),
        }),
      ],
      placeholder: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: namePlaceholder,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'placeholder',
          }),
        }),
      ],
      searchMatcher: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameSearchMatcher,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'searchMatcher',
          }),
        }),
      ],
      searchable: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: searchable,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'searchable',
          }),
        }),
      ],
      selectAllItem: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: selectAllItem,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'selectAllItem',
          }),
        }),
      ],
      stringify: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: stringify,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'stringify',
          }),
        }),
      ],
      valueTemplate: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: valueTemplate,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'valueTemplate',
          }),
        }),
      ],
      search: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: search,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'search',
          }),
        }),
      ],
    },
    defaultInputs: {
      label: 'Выберите из списка',
    },

    outputs: {
      searchChange: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: searchOutput,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'searchChange',
          }),
        }),
      ],
    },
    finishTasks: [
      prizmAstCreateActionBy(PrizmRunTasksOnNodeTemplateTask, {
        dontRunOnOnMain: true,
        runOnChildren: true,
        tasks: [
          {
            selector: 'prizm-input-multi-select',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  nameDropdownWidth,
                  nameEmptyContent,
                  nameIcon,
                  nameIdentityMatcher,
                  nameItems,
                  nameMaxDropdownHeight,
                  nameMinDropdownHeight,
                  nameNullContent,
                  namePlaceholder,
                  nameSearchMatcher,
                  searchable,
                  stringify,
                  valueTemplate,
                  search,
                  searchOutput,
                  ngModel,
                  formControl,
                  selectAllItem,
                  isChipsDeletable,
                ],
              }),
            ],
          },
        ],
      }),
    ],
  },
];
