import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTaskProcessor,
  PrizmTemplateTask,
} from '@prizm-ui/ast';
import { ZyfraAccordionTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-accordion-example',
  templateUrl: './accordion.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstAccordionExampleComponent implements OnInit {
  readonly zyfraAccordionTasks: PrizmTemplateTask[] = ZyfraAccordionTemplateTasks;
  // readonly zyfraAccordionTasks: PrizmTemplateTask[] =  [
  //   {
  //     selector: 'zyfra-accordion',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-accordion',
  //       }),
  //     ],
  //     inputs: {
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       expandIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       collapseIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       multiple: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       activeIndexChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onOpen: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     }
  //   },
  //   {
  //     selector: 'zyfra-accordion-tab',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-accordion-item',
  //       }),
  //       prizmAstCreateActionBy(
  //         PrizmMoveContentToComponentTemplateTask,
  //         {
  //           name: 'ng-template',
  //           attrs: {
  //             prizmAccordionContent: null
  //           },
  //           children: []
  //         }
  //       )
  //     ],
  //     inputs: {
  //       header: [
  //         prizmAstCreateActionBy(
  //           PrizmRenameTemplateTask,
  //           {
  //             newAttrName: 'title'
  //           }
  //         )
  //       ],
  //       isExpanded: [
  //         prizmAstCreateActionBy(
  //           PrizmRenameTemplateTask,
  //           {
  //             newAttrName: 'selected'
  //           }
  //         )
  //       ],
  //       cache: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       transitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       selectedChange: [
  //         prizmAstCreateActionBy(
  //           PrizmRenameTemplateTask,
  //           {
  //             newAttrName: 'isExpandedChange'
  //           }
  //         )
  //       ],
  //     }
  //   }
  // ];
  readonly zyfraAccordionHtml = `
<zyfra-accordion [multiple]="false"
                 (onOpen)="onOpen($event)"
                 (onClose)="onClose($event)"
                 (activeIndexChange)="activeIndexChange($event)">
  <zyfra-accordion-tab header="Header 1"
                       [disabled]="disabled"
                       (selectedChange)="selectedChange($event)">
    Content 1
  </zyfra-accordion-tab>
  <zyfra-accordion-tab header="Header 2">
    Content 2
  </zyfra-accordion-tab>
</zyfra-accordion>
`;
  resultZyfraAccordionHtml!: string;

  public ngOnInit(): void {
    this.parseAccordion();
  }

  private parseAccordion(): void {
    const parsed = prizmAstHtmlParse(this.zyfraAccordionHtml);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.zyfraAccordionTasks);
    this.resultZyfraAccordionHtml = prizmAstHtmlStringify(
      nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]
    );
  }
}
