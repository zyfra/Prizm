import {
  PrizmAddChildrenTemplateTask,
  PrizmAddCommentTemplateTask,
  PrizmAstAddImportsIfNeededCodeTask,
  PrizmAstAddImportsToNgModuleCodeTask,
  prizmAstCreateActionBy,
  prizmAstCreateCodeTaskBy,
  PrizmCallWithNewSourceTemplateTask,
  PrizmChangeNameTemplateTask,
  PrizmCodeTask,
  PrizmNotSupportedTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmRunTasksOnNodeTemplateTask,
  PrizmSaveToCallOnDemandTemplateTask,
  PrizmTemplateTask,
} from '../../task';

const newName = 'prizm-input-layout';
const newNameOfPlaceholder = [newName, 'placeholder'].join('::');
const newNameOfNgModel = [newName, 'ngModel'].join('::');
const newNameOfFormControl = [newName, 'formControl'].join('::');
const newNameOfFormControlName = [newName, 'formControlName'].join('::');

export const ZyfraInputTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-input',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: newName,
      }),
      // TODO also set children
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'input',
        attrs: {
          prizmInput: null,
        },
        children: [],
      }),
    ],
    inputs: {
      options: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'items',
          needFixApi: true,
        }),
      ],
      size: [
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: need to correct size format (number > enum)',
        }),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass size to child ',
        }),
      ],
      formControl: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfFormControl,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControl',
          }),
        }),
      ],
      formControlName: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfFormControlName,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControlName',
          }),
        }),
      ],
      ngModel: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfNgModel,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'ngModel',
          }),
        }),
      ],
      placeholder: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: newNameOfPlaceholder,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'placeholder',
          }),
        }),
      ],
      value: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a value size to child ',
        }),
      ],
      step: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a step size to child ',
        }),
      ],
      min: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a min value to child ',
        }),
      ],
      max: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass a max value to child ',
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

      format: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      showButtons: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      buttonLayout: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      spanClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      iClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      incrementButtonClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      decrementButtonClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      incrementButtonIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      decrementButtonIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      locale: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      localeMatcher: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      mode: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      prefix: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      suffix: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      currency: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      currencyDisplay: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      useGrouping: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      minFractionDigits: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      maxFractionDigits: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      inputStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      maxlength: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      title: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      ariaRequired: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      autocomplete: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onInput: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      onBlur: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      onFocus: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
    },
    finishTasks: [
      prizmAstCreateActionBy(PrizmRunTasksOnNodeTemplateTask, {
        dontRunOnOnMain: true,
        runOnChildren: true,
        tasks: [
          {
            selector: [
              {
                type: 'byAttr',
                attrs: {
                  // input: undefined,
                  prizmInput: undefined,
                },
              },
            ],
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [newNameOfPlaceholder, newNameOfNgModel, newNameOfFormControl, newNameOfFormControlName],
              }),
            ],
          },
        ],
      }),
    ],
  },
];

export const ZyfraInputCodeTasks: PrizmCodeTask[] = [
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsIfNeededCodeTask, {
    importToAdd: '@prizm-ui/components',
    namedImports: ['PrizmInputTextModule'],
    targetImport: '@digital-plant/zyfra-components',
    targetNamedImports: ['ZyfraInputModule'],
    commentBeforeImport: 'PRIZM:MIGRATOR added new module for migrate from ZyfraInputModule',
  }),
  prizmAstCreateCodeTaskBy(PrizmAstAddImportsToNgModuleCodeTask, {
    newModule: 'PrizmInputTextModule',
    moduleToFind: 'ZyfraInputModule',
    comment: 'PRIZM:MIGRATOR: Our added module for migrate from ZyfraInputModule',
  }),
];
