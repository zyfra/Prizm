import { Component, OnInit } from '@angular/core';
import {
  PrizmAstHtmlItem,
  prizmAstHtmlParse,
  prizmAstHtmlStringify,
  PrizmTemplateTask,
  PrizmTemplateTaskProcessor,
} from '@prizm-ui/ast';
import { ZyfraTabsTemplateTasks } from '@prizm-ui/ast/cb3-template-examples';

@Component({
  selector: 'prizm-ast-tabs-example',
  templateUrl: './tabs.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmAstTabsExampleComponent implements OnInit {
  readonly tasks: PrizmTemplateTask[] = ZyfraTabsTemplateTasks;
  // readonly tasks: PrizmTemplateTask[] = [
  //   {
  //     selector: 'zyfra-tab-view',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-tabs',
  //       }),
  //     ],
  //     inputs: {
  //       activeIndex: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'activeTabIndex'
  //         })
  //       ],
  //
  //       controlClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       style: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       styleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       activeIndexChange: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'activeTabIndexChange'
  //         })
  //       ],
  //       onClose: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       onChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     }
  //   },
  //   {
  //     selector: 'zyfra-tab-panel',
  //     tasks: [
  //       prizmAstCreateActionBy(PrizmChangeNameTemplateTask, {
  //         name: 'prizm-tab',
  //       }),
  //       prizmAstCreateActionBy(PrizmCommentContentTemplateTask, {})
  //     ],
  //     inputs: {
  //       header: [
  //         prizmAstCreateActionBy(
  //           PrizmMoveToContentTemplateTask,
  //           {
  //             notClearChildren: true
  //           }
  //         )
  //       ],
  //       tooltip: [prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //         newAttrName: 'prizmTooltip'
  //       })],
  //       tooltipPosition: [
  //         prizmAstCreateActionBy(PrizmRenameTemplateTask, {
  //           newAttrName: 'prizmHintDirection',
  //           needFixApi: true
  //         })
  //       ],
  //       selected: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       headerStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       headerStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       cache: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       leftIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       rightIcon: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltipStyleClass: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //       tooltipPositionStyle: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     },
  //     outputs: {
  //       propChange: [prizmAstCreateActionBy(PrizmNotSupportedTemplateTask, {})],
  //     }
  //   }
  // ];
  readonly html = `
<zyfra-tab-view
  [class]="zyfraTabViewTagStyle"
  [activeIndex]="activeIndex"
  [controlClose]="controlClose"
  [style]="style"
  [styleClass]="styleClass"
  (onChange)="onChangeHandler($event)"
  (onClose)="onCloseHandler($event)"
>
  <ng-container *ngFor="let tab of tabs">
    <zyfra-tab-panel
      [header]="tab.header"
      [selected]="tab.selected"
      [disabled]="tab.disabled"
      [closable]="tab.closable"
      [leftIcon]="tab.leftIcon"
      [rightIcon]="tab.rightIcon"
      [headerStyle]="tab.headerStyle"
      [headerStyleClass]="tab.headerStyleClass"
      [cache]="tab.cache"
      [tooltip]="tab.tooltip"
      [tooltipPosition]="tab.tooltipPosition"
      [tooltipStyleClass]="tab.tooltipStyleClass"
    >
      {{ tab.content }}
    </zyfra-tab-panel>
  </ng-container>
</zyfra-tab-view>
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
