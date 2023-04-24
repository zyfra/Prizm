import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTaskProcessor,
  PrizmTemplateTask,
  ZyfraRadioTemplateTasks,
} from '@prizm-ui/ast';

@Component({
  selector: 'prizm-ast-radio-example',
  templateUrl: './radio.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstRadioExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraRadioTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-radio-button',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-radio-button',
  //       }),
  //     ],
  //     inputs: {
  //       formControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       formControlName: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       onClick: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'clickEvent',
  //         }),
  //       ],
  //       onBlur: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'blurEvent',
  //         }),
  //       ],
  //       onFocus: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'focusEvent',
  //         }),
  //       ]
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-radio-button
   *ngFor="let item of items"
   [name]="name"
   [styleClass]="styleClass"
   [label]="item.label"
   [value]="item.value"
   [disabled]="disabled"
   [(ngModel)]="model"
   (onClick)="onClick($event)"
   (ngModelChange)="ngModelChange($event)"
   (onFocus)="onFocus($event)"
   (onBlur)="onBlur($event)"
></zyfra-radio-button>
`;
  result: string;

  public ngOnInit(): void {
    this.parseAccordion();
  }

  private parseAccordion(): void {
    const parsed = prizmHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
