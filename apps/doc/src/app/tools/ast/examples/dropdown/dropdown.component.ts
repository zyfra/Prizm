import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTaskProcessor,
  PrizmTemplateTask,
} from '@prizm-ui/ast';
import { ZyfraDropdownTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-dropdown-example',
  templateUrl: './dropdown.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstDropdownExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraDropdownTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-dropdown',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-select',
  //       }),
  //     ],
  //     inputs: {
  //       options: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'items',
  //           needFixApi: true
  //         }),
  //       ],
  //       dropdownIcon: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'icon',
  //           needFixApi: true
  //         }),
  //       ],
  //       showClear: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'forceClear'
  //         }),
  //       ],
  //
  //
  //       optionValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionDisabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionGroupLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionGroupChildren: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       scrollHeight: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       panelStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       panelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterMatchMode: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterPlaceholder: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterLocale: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       required: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       disabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       emptyMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       emptyFilterMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       editable: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       maxlength: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       appendTo: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       dataKey: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       autofocus: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       autofocusFilter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       resetFilterOnHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       autoDisplayFirst: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       group: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       groupTemplateClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       onChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onFocus: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onBlur: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onShow: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onFilter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //
  //       onClick: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'click'
  //         }),
  //       ],
  //     }
  //   },
  //
  // ];
  readonly html = `
<zyfra-dropdown
  [options]="cities"
  [(ngModel)]="model"
  optionLabel="name"
  placeholder="Select a City"
  [showClear]="true"
></zyfra-dropdown>`;
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
