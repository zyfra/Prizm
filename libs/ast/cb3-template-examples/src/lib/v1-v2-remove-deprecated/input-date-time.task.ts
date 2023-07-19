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

const formControl = ['prizm-input-layout-date-time', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-time', 'ngModel'].join('::');
const defaultActiveYearMonth = ['prizm-input-layout-date-time', 'defaultActiveYearMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date-time', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-time', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date-time', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date-time', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date-time', 'max'].join('::');
const placeholder = ['prizm-input-layout-date-time', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-time', 'readOnly'].join('::');
const min = ['prizm-input-layout-date-time', 'min'].join('::');
const timeItems = ['prizm-input-layout-date-time', 'timeItems'].join('::');
const timeMode = ['prizm-input-layout-date-time', 'timeMode'].join('::');
const timeStrict = ['prizm-input-layout-date-time', 'timeStrict'].join('::');
const testId = ['prizm-input-layout-date-time', 'testId'].join('::');

export const PrizmInputDateTimeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date-time',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-date-time',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Выберите дату и время',
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
            selector: 'prizm-input-layout-date-time',
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
