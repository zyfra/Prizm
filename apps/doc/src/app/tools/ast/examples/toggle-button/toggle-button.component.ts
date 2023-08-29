import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraToggleButtonTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-toggle-button-example',
  templateUrl: './toggle-button.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstToggleButtonExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraToggleButtonTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-toggle-button',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-toggle',
  //       }),
  //     ],
  //     inputs: {
  //       onLabel: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
  //           extraComment: 'TODO onLabel need set before this component'
  //         }),
  //       ],
  //       offLabel: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
  //           extraComment: 'TODO offLabel need set before this component'
  //         }),
  //       ],
  //       disabled: [
  //         prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {
  //           extraComment: 'TODO disabled need pass with FormControl'
  //         }),
  //       ],
  //       onIcon: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'iconOn'
  //         })
  //       ],
  //       offIcon: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'iconOff'
  //         })
  //       ],
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       iconPos: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //     },
  //   }
  // ];
  readonly html = `
<zyfra-toggle-button
  onLabel="onLabel"
  offLabel="offLabel"
  onIcon="onLabel"
  [offIcon]="offLabel"
  styleClass="p-button-info"
></zyfra-toggle-button>
`;
  result!: string;

  public ngOnInit(): void {
    this.parse();
  }

  private parse(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
