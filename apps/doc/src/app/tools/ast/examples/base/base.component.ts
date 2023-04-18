import { Component, OnInit } from '@angular/core';
import {
  PrizmChangeNameTemplateTask,
  PrizmAddAttributeTemplateTask,
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmMoveToContentTemplateTask,
  PrizmNotSupportedTemplateTask,
  PrizmTask,
  PrizmTaskProcessor,
  prizmAstCreateActionBy,
  PrizmRenameTemplateTask,
} from '@prizm-ui/ast';

@Component({
  selector: 'prizm-ast-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstBaseExampleComponent implements OnInit {
  readonly task: PrizmTask = {
    name: 'zyfra-button',
    tasks: [
      prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
        name: 'button',
      }),
      prizmAstCreateActionBy(PrizmAddAttributeTemplateTask, {
        attr: 'prizmButton',
      }),
    ],
    inputs: {
      label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
      iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
      badge: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
    },
    outputs: {
      onBlur: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'blur',
        }),
      ],
      onFocus: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'focus',
        }),
      ],
      onClick: [
        prizmAstCreateActionBy(PrizmRenameTemplateTask, {
          newAttrName: 'click',
        }),
      ],
    },
  };
  // @Input() label: string;
  // @Input() type = 'button';
  // @Input() icon: string;
  // @Input() iconPos: TZyfraButtonIconPosision = 'left';
  // @Input() disabled: boolean;
  // @Input() badge: string;
  // @Input() style: any;
  // @Input() styleClass: string;
  //
  // @Output() onClick = new EventEmitter<PointerEvent>();
  // @Output() onFocus = new EventEmitter<FocusEvent>();
  // @Output() onBlur = new EventEmitter<FocusEvent>();

  readonly html = `
  <zyfra-button label='123' iconPos='left'></zyfra-button>
  <zyfra-button (onFocus)='null'>Test</zyfra-button>
`;
  resultHtml: string;

  public ngOnInit(): void {
    const parsed = prizmHtmlParse(this.html);
    const nodeProcessor = new PrizmTaskProcessor([this.task]);
    this.resultHtml = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
