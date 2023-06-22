import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraTooltipTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-tooltip-example',
  templateUrl: './tooltip.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstTooltipExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraTooltipTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: [
  //       {
  //         type: 'byAttr',
  //         attrs: {
  //           'zyfraTooltip': undefined
  //         }
  //       }
  //     ],
  //     tasks: [],
  //     inputs: {
  //       zyfraTooltip: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmTooltip'
  //       })],
  //       zyfraTooltipShow: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmHintShow'
  //       })],
  //       zyfraTooltipContext: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmHintContext'
  //       })],
  //       zyfraTooltipDelay: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmTooltipShowDelay'
  //       })],
  //       zyfraTooltipPosition: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'prizmHintDirection',
  //           needFixApi: true
  //         })
  //       ],
  //       zyfraTooltipColor: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       zyfraTooltipClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       zyfraTooltipOverflowText: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       zyfraTooltipShowChange: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmHoveredChange'
  //       })],
  //     },
  //   }
  // ];
  readonly html = `
<ng-template #someTemplate><span>Show me</span></div></ng-template>
<button zyfraButton
    class="class"
    type="button"
    [zyfraTooltip]="someTemplate"
    color="success"
    zyfraTooltipPosition="right"
>
  Right
</button>


<button
  zyfraButton
  class="class"
  type="button"
  zyfraTooltip="Подсказка справа"
  zyfraTooltipPosition="right"
>
    Right
</button>
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
