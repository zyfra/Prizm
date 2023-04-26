import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraButtonTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-button-example',
  templateUrl: './button.component.html',
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
  readonly zyfraButtonTasks: PrizmTemplateTask[] = ZyfraButtonTemplateTasks;
  // readonly zyfraButtonTasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-button',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'button',
  //       }),
  //       prizmAstCreateActionBy(PrizmAddAttributeTemplateTask, {
  //         attr: 'prizmButton',
  //       }),
  //     ],
  //     inputs: {
  //       label: [prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {})],
  //       iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       badge: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       onBlur: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'blur',
  //         }),
  //       ],
  //       onFocus: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'focus',
  //         }),
  //       ],
  //       onClick: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'click',
  //         }),
  //       ],
  //     },
  //   }
  // ];
  readonly zyfraButtonHtml = `
  <zyfra-button label='123' iconPos='left'></zyfra-button>
  <zyfra-button (onFocus)='null'>Test</zyfra-button>
`;
  resultZyfraButtonHtml: string;

  public ngOnInit(): void {
    this.parseButton();
  }

  private parseButton(): void {
    const parsed = prizmHtmlParse(this.zyfraButtonHtml);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.zyfraButtonTasks);
    this.resultZyfraButtonHtml = prizmHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmHtmlItem[]);
  }
}
