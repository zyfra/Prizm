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

const formControl = ['prizm-input-layout-month-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-month-range', 'ngModel'].join('::');
const disabledItemHandler = ['prizm-input-layout-month-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-month-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-month-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-month-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-month-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-month-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-month-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-month-range', 'min'].join('::');
const testId = ['prizm-input-layout-month-range', 'testId'].join('::');

export const PrizmInputMonthRangeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-month-range',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Выберите период',
    },
    inputs: {
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
      markerHandler: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: markerHandler,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'markerHandler',
          }),
        }),
      ],
      max: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: max,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'max',
          }),
        }),
      ],
      min: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: min,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'min',
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
      testId: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: testId,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'testId',
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
            selector: 'prizm-input-layout-month-range',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  formControl,
                  ngModel,
                  disabledItemHandler,
                  extraButtonInjector,
                  items,
                  markerHandler,
                  max,
                  placeholder,
                  readOnly,
                  min,
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
