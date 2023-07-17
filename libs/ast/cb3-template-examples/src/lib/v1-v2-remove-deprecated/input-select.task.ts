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

const formControl = ['prizm-input-select', 'formControl'].join('::');
const ngModel = ['prizm-input-select', 'ngModel'].join('::');

const nameDropdownWidth = ['prizm-input-select', 'dropdownWidth'].join('::');
const nameEmptyContent = ['prizm-input-select', 'emptyContent'].join('::');
const nameIcon = ['prizm-input-select', 'icon'].join('::');
const nameIdentityMatcher = ['prizm-input-select', 'identityMatcher'].join('::');
const nameItems = ['prizm-input-select', 'items'].join('::');
const nameMaxDropdownHeight = ['prizm-input-select', 'maxDropdownHeight'].join('::');
const nameMinDropdownHeight = ['prizm-input-select', 'minDropdownHeight'].join('::');
const nameNullContent = ['prizm-input-select', 'nullContent'].join('::');
const namePlaceholder = ['prizm-input-select', 'placeholder'].join('::');
const nameSearchMatcher = ['prizm-input-select', 'searchMatcher'].join('::');
const searchable = ['prizm-input-select', 'searchable'].join('::');
const stringify = ['prizm-input-select', 'stringify'].join('::');
const valueTemplate = ['prizm-input-select', 'valueTemplate'].join('::');
const search = ['prizm-input-select', 'search'].join('::');
const searchOutput = ['prizm-input-select', 'output-search'].join('::');

export const PrizmInputSelectTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-select',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-select',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    inputs: {
      dropdownWidth: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: nameDropdownWidth,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'dropdownWidth',
          }),
        }),
      ],
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
            selector: 'prizm-input-select',
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
                ],
              }),
            ],
          },
        ],
      }),
    ],
  },
];
