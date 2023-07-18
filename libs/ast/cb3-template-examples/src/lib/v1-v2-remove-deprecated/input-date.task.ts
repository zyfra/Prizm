import {
  PrizmAddChildrenTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmSaveToCallOnDemandTemplateTask,
  PrizmTemplateTask,
} from '@prizm-ui/ast';

const formControl = ['prizm-input-layout-date', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date', 'ngModel'].join('::');
const defaultActiveYearMonth = ['prizm-input-layout-date', 'defaultActiveYearMonth'].join('::');
const disabledItemHandler = ['prizm-input-layout-date', 'disabledItemHandler'].join('::');
const extraButtonInjector = ['prizm-input-layout-date', 'extraButtonInjector'].join('::');
const items = ['prizm-input-layout-date', 'items'].join('::');
const markerHandler = ['prizm-input-layout-date', 'markerHandler'].join('::');
const max = ['prizm-input-layout-date', 'max'].join('::');
const placeholder = ['prizm-input-layout-date', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date', 'readOnly'].join('::');
const min = ['prizm-input-layout-date', 'min'].join('::');

export const PrizmInputDateTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-date',
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
    finishTasks: [],
  },
];
