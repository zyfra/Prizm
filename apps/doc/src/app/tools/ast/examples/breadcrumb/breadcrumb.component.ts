import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraBreadcrumbTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-breadcrumb-example',
  templateUrl: './breadcrumb.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstBreadcrumbExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraBreadcrumbTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-breadcrumb',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-breadcrumbs',
  //       }),
  //     ],
  //     inputs: {
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       home: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       items: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'breadcrumbs',
  //           needFixApi: true
  //         }),
  //       ],
  //     },
  //     outputs: {
  //       onItemClick: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'breadcrumbChange',
  //           needFixApi: true
  //         }),
  //       ],
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-breadcrumb
  [model]="items"
  [home]="home"
  [style]="style"
  [items]="[]"
  [styleClass]="styleClass"
  (onItemClick)="onItemClickHandler($event)">
</zyfra-breadcrumb>
`;
  result: string;

  public ngOnInit(): void {
    this.parseAccordion();
  }

  private parseAccordion(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
