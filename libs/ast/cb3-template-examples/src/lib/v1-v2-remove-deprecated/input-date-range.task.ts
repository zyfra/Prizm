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

const formControl = ['prizm-input-layout-date-range', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-range', 'ngModel'].join('::');
const defaultViewedMonth = ['prizm-input-layout-date-range', 'defaultViewedMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date-range', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-range', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date-range', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date-range', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date-range', 'max'].join('::');
const placeholder = ['prizm-input-layout-date-range', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-range', 'readOnly'].join('::');
const min = ['prizm-input-layout-date-range', 'min'].join('::');
const testId = ['prizm-input-layout-date-range', 'testId'].join('::');
const maxLength = ['prizm-input-layout-date-range', 'maxLength'].join('::');
const minLength = ['prizm-input-layout-date-range', 'minLength'].join('::');

export const PrizmInputDateRangeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date-range',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-date-range',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Выберите из списка',
    },
    inputs: {
      defaultViewedMonth: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: defaultViewedMonth,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'defaultViewedMonth',
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
      maxLength: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: maxLength,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'maxLength',
          }),
        }),
      ],
      minLength: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: minLength,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'minLength',
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
            selector: 'prizm-input-layout-date-range',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  formControl,
                  ngModel,
                  defaultViewedMonth,
                  disabledItemHandler,
                  extraButtonInjector,
                  items,
                  markerHandler,
                  max,
                  placeholder,
                  readOnly,
                  min,
                  testId,
                  maxLength,
                  minLength,
                ],
              }),
            ],
          },
        ],
      }),
    ],
  },
];
