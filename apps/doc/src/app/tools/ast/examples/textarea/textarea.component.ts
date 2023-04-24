import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraTextareaTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-textarea-example',
  templateUrl: './textarea.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstTextareaExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraTextareaTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-input-switch',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-toggle',
  //       }),
  //     ],
  //     inputs: {
  //       disabled: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
  //         prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
  //           comment: 'TODO: for pass disabled use pass by FormControl ',
  //         }),
  //       ],
  //       readonly: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
  //         prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
  //           comment: 'TODO: for pass readonly use pass by FormControl ',
  //         }),
  //       ],
  //       mini: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'size',
  //           setExactNewAttrName: true,
  //           value: 'm',
  //         }),
  //       ],
  //
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {},
  //   },
  // ];
  readonly html = `
<zyfra-textarea

  [(ngModel)]="modelForTextArea"
  placeholder="Введите текст.."
  class="inputClass"
  disabled="false"
  maxlength="100"
  minlength="0"
  rows="5"
  cols="10"
  autoResize="false"
  name="some name"
  (onResize)="onResizeTextAreaHandler($event)"
></zyfra-textarea>
`;
  result: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
