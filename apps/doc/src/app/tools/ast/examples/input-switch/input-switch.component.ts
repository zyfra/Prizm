import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTaskProcessor,
  PrizmTemplateTask,
  ZyfraInputSwitchTemplateTasks,
} from '@prizm-ui/ast';

@Component({
  selector: 'prizm-ast-input-switch-example',
  templateUrl: './input-switch.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstInputSwitchExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraInputSwitchTemplateTasks;
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
  //           comment: 'TODO: for pass disabled use pass by FormControl '
  //         })
  //       ],
  //       readonly: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {}),
  //         prizmAstCreateActionBy(PrizmAddCommentTemplateTask, {
  //           comment: 'TODO: for pass readonly use pass by FormControl '
  //         })
  //       ],
  //       mini: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'size',
  //           setExactNewAttrName: true,
  //           value: 'm'
  //         })
  //       ],
  //
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-input-switch
[disabled]='true'
[readonly]='true'
[mini]='true'
[(ngModel)]="checked"></zyfra-input-switch>
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
