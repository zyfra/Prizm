import {
  PrizmAddChildrenTemplateTask,
  PrizmAddCommentTemplateTask,
  prizmAstCreateActionBy,
  PrizmChangeNameTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmRemoveAttributeTemplateTask,
  PrizmRenameTemplateTask,
  PrizmTemplateTask,
} from '../../task';

export const ZyfraInputTemplateTasks: PrizmTemplateTask[] = [
  {
    selector: 'zyfra-input',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'prizm-input-layout',
      }),
      // TODO also set children
      prizmAstCreateActionBy(PrizmAddChildrenTemplateTask, {
        name: 'input',
        attrs: {
          prizmInput: null,
          type: 'number',
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
      placeholder: [
        prizmAstCreateActionBy(PrizmRemoveAttributeTemplateTask, {}),
        prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
          comment: 'TODO: You also need to pass size to child ',
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
  },
];
