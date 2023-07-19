import {
  PrizmAddChildrenTemplateTask,
  prizmAstCreateActionBy,
  PrizmCallWithNewSourceTemplateTask,
  PrizmChangeNameTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmRunTasksOnNodeTemplateTask,
  PrizmSaveToCallOnDemandTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

const formControl = ['prizm-input-layout-time', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-time', 'ngModel'].join('::');
const itemSize = ['prizm-input-layout-time', 'itemSize'].join('::');
const disabledItemHandler = ['prizm-input-layout-time', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-time', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-time', 'items'].join('::');
const mode = ['prizm-input-layout-time', 'mode'].join('::');
const strict = ['prizm-input-layout-time', 'strict'].join('::');
const placeholder = ['prizm-input-layout-time', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-time', 'readOnly'].join('::');
const testId = ['prizm-input-layout-time', 'testId'].join('::');

export const PrizmInputTimeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-time',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-time',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Выберите время',
    },
    inputs: {
      itemSize: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: itemSize,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'itemSize',
          }),
        }),
      ],
      val: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pseudoFocused: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pseudoHovered: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pseudoInvalid: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pseudoPressed: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pseudoState: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],

      formControl: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: formControl,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'formControl',
          }),
        }),
      ],
      testId: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: testId,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'testId',
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
      disabledItemHandler: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: disabledItemHandler,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'disabledItemHandler',
          }),
        }),
      ],
      extraButtonInjector: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: extraButtonInjector,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'extraButtonInjector',
          }),
        }),
      ],
      items: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: items,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'items',
          }),
        }),
      ],
      mode: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: mode,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'mode',
          }),
        }),
      ],
      strict: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: strict,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'strict',
          }),
        }),
      ],
      placeholder: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: placeholder,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'placeholder',
          }),
        }),
      ],
      readOnly: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: readOnly,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'readOnly',
          }),
        }),
      ],
    },
    outputs: {
      focusVisibleChange: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      focusedChange: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      hoveredChange: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
      pressedChange: [prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {})],
    },
    finishTasks: [
      prizmAstCreateActionBy(PrizmRunTasksOnNodeTemplateTask, {
        dontRunOnOnMain: true,
        runOnChildren: true,
        tasks: [
          {
            selector: 'prizm-input-layout-time',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  formControl,
                  ngModel,
                  itemSize,
                  disabledItemHandler,
                  extraButtonInjector,
                  items,
                  mode,
                  strict,
                  placeholder,
                  readOnly,
                  testId,
                ],
              }),
            ],
          },
        ],
      }),
    ],
  },
];
