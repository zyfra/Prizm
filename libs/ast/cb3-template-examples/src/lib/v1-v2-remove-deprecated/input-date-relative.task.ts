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

const formControl = ['prizm-input-layout-date-relative', 'formControl'].join('::');
const ngModel = ['prizm-input-layout-date-relative', 'ngModel'].join('::');
const disabled = ['prizm-input-layout-date-relative', 'disabled'].join('::');
const extraButtonInjector = ['prizm-input-layout-date-relative', 'extraButtonInjector'].join('::');
const canOpen = ['prizm-input-layout-date-relative', 'canOpen'].join('::');
const placeholder = ['prizm-input-layout-date-relative', 'placeholder'].join('::');
const readOnly = ['prizm-input-layout-date-relative', 'readOnly'].join('::');
const testId = ['prizm-input-layout-date-relative', 'testId'].join('::');

export const PrizmInputDateRelativeTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'prizm-input-date-relative',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'prizm-input-layout-date-relative',
        attrs: {},
        voidElement: true,
        children: [],
      }),
    ],
    defaultInputs: {
      label: 'Относительная дата',
    },
    inputs: {
      disabled: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: disabled,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'disabled',
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
      extraButtonInjector: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: extraButtonInjector,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'extraButtonInjector',
          }),
        }),
      ],
      canOpen: [
        prizmAstCreateActionBy(PrizmSaveToCallOnDemandTemplateTask, {
          id: canOpen,
          action: prizmAstCreateActionBy(PrizmRenameTemplateTask, {
            newAttrName: 'canOpen',
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
            selector: 'prizm-input-layout-date-relative',
            inputs: {},
            outputs: {},
            tasks: [
              prizmAstCreateActionBy(PrizmCallWithNewSourceTemplateTask, {
                id: [
                  formControl,
                  ngModel,
                  disabled,
                  extraButtonInjector,
                  canOpen,
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
