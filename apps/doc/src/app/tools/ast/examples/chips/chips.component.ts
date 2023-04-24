import { Component, OnInit } from '@angular/core';
import {
  PrizmHtmlItem,
  prizmHtmlParse,
  prizmHtmlStringify,
  PrizmTemplateTaskProcessor,
  PrizmTemplateTask,
  ZyfraCheckboxTemplateTasks,
} from '@prizm-ui/ast';

@Component({
  selector: 'prizm-ast-chips-example',
  templateUrl: './chips.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstChipsExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraCheckboxTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-chip',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-chips-item',
  //       }),
  //     ],
  //     inputs: {
  //       label: [
  //         prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {
  //         }),
  //       ],
  //       removable: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'deletable'
  //         }),
  //       ],
  //
  //       icon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       image: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       removeIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       onRemove: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'deleted'
  //         }),
  //       ],
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-chip label="Removable" icon="zyfra-icon location-compass" [removable]="true" (onRemove)='null'></zyfra-chip>
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
