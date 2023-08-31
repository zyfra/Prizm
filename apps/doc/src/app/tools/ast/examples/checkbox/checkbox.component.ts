import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraCheckboxTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-checkbox-example',
  templateUrl: './checkbox.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstCheckboxExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraCheckboxTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-checkbox',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-checkbox',
  //       }),
  //     ],
  //     inputs: {
  //       binary: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'checked',
  //         }),
  //       ],
  //       label: [
  //         prizmAstCreateActionBy(PrizmMoveToContentTemplateTask, {
  //         }),
  //       ],
  //
  //       disabledControl: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       value: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       labelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       checkboxIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       required: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       trueValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       falseValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //
  //     },
  //     outputs: {
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-checkbox name="checked" [binary]="true" label="checkbox" [(model)]="model"> ></zyfra-checkbox>
`;
  result!: string;

  public ngOnInit(): void {
    this.parseAccordion();
  }

  private parseAccordion(): void {
    const parsed = prizmAstHtmlParse(this.html);
    const nodeProcessor = new PrizmTemplateTaskProcessor(this.tasks);
    this.result = prizmAstHtmlStringify(nodeProcessor.processTasks(parsed) as PrizmAstHtmlItem[]);
  }
}
