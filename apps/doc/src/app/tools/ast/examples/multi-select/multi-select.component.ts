import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraMultiSelectTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-multi-select-example',
  templateUrl: './multi-select.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstMultiSelectExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraMultiSelectTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-multiselect',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-multi-select',
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
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       panelStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       panelStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       inputId: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       disabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       readonly: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       group: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterPlaceHolder: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterLocale: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       overlayVisible: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tabindex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       appendTo: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       dataKey: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       name: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaLabelledBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       displaySelectedLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       maxSelectedLabels: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       selectionLimit: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       selectedItemsLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       showToggleAll: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       emptyFilterMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       emptyMessage: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       resetFilterOnHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionValue: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionDisabled: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionGroupLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       optionGroupChildren: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       showHeader: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       autoZIndex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       baseZIndex: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterBy: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       virtualScroll: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       itemSize: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       showTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       hideTransitionOptions: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       ariaFilterLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       filterMatchMode: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltip: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltipPosition: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltipPositionStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltipStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       autofocusFilter: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       display: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       scrollHeight: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       defaultLabel: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //
  //     },
  //     outputs: {
  //       onChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onFocus: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onBlur: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onPanelShow: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onPanelHide: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
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
<zyfra-multiselect
  [(ngModel)]="model"
  [options]="cities"
  [optionLabel]="name"
  [placeholder]="Select a City"
></zyfra-multiselect>`;
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
