import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraSpinnerTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-spinner-example',
  templateUrl: './spinner.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstSpinnerExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraSpinnerTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-spinner',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-spinner',
  //       }),
  //     ],
  //     inputs: {
  //       size: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           needFixApi: true,
  //           newAttrName: 'size',
  //           setExactNewAttrName: true,
  //           value: 'l'
  //         })
  //       ],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       strokeWidth: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       fill: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       animationDuration: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       color: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //     },
  //   }
  // ];
  readonly html = `
<zyfra-spinner
  size="50px"
  color="success"
  [style]="{ opacity: 0.5 }"
></zyfra-spinner>
`;
  result: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
