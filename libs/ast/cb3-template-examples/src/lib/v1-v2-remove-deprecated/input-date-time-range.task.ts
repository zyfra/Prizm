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

const formControl = ['prizm-input-layout-date-time-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-time-range', 'ngModel'].join('::');
const defaultActiveYearMonth = ['prizm-input-layout-date-time-range', 'defaultActiveYearMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date-time-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-time-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date-time-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date-time-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date-time-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-date-time-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-time-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-date-time-range', 'min'].join('::');
const timeItems = ['prizm-input-layout-date-time-range', 'timeItems'].join('::');
const timeMode = ['prizm-input-layout-date-time-range', 'timeMode'].join('::');
const timeStrict = ['prizm-input-layout-date-time-range', 'timeStrict'].join('::');
const testId = ['prizm-input-layout-date-time-range', 'testId'].join('::');

export const PrizmInputDateTimeRangeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date-time-range',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-date-time-range',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Выберите из списка',
    },
    inputs: {
      defaultActiveYearMonth: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: defaultActiveYearMonth,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'defaultActiveYearMonth',
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
      timeItems: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: timeItems,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'timeItems',
          }),
        }),
      ],
      timeMode: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: timeMode,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'timeMode',
          }),
        }),
      ],
      timeStrict: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: timeStrict,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'timeStrict',
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
            selector: 'prizm-input-layout-date-time-range',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  formControl,
                  ngModel,
                  defaultActiveYearMonth,
                  disabledItemHandler,
                  extraButtonInjector,
                  items,
                  markerHandler,
                  max,
                  placeholder,
                  readOnly,
                  min,
                  timeItems,
                  timeMode,
                  timeStrict,
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
