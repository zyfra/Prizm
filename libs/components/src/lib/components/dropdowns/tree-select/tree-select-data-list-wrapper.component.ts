import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmDataListDirective, PrizmDataListWrapperComponent } from '../../data-list';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmTreeSelectItemsDirective } from './tree-select-items.directive';
import { PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF } from './token';
import { BehaviorSubject } from 'rxjs';
import { PrizmCronInnerModule } from '../../cron/cron-inner.module';
import { PrizmInputHintModule, PrizmInputTextComponent } from '../../input';
import { PrizmTreeSelectSearchDirective } from './search/tree-select-search.directive';

@Component({
  selector: 'prizm-input-tree-select-data-list-wrapper',
  templateUrl: './tree-select-data-list-wrapper.component.html',
  styleUrl: './tree-select-data-list-wrapper.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    PrizmDataListWrapperComponent,
    PrizmCronInnerModule,
    PrizmInputHintModule,
    PrizmInputTextComponent,
  ],
  providers: [
    {
      provide: PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF,
      useFactory: () => new BehaviorSubject(null),
    },
  ],
  hostDirectives: [
    {
      directive: PrizmTreeSelectItemsDirective,
      inputs: ['items'],
    },
  ],
})
export class PrizmTreeSelectDataListWrapperComponent extends PrizmAbstractTestId implements OnInit {
  @Input() dataListDirective?: PrizmDataListDirective;
  override testId_ = 'ui_tree_select_data_list_wrapper';
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef?: ViewContainerRef;
  readonly treeSelectSearchDirective = inject(PrizmTreeSelectSearchDirective);
  readonly treeSelectItemsViewContainerRef = inject(PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF);

  ngOnInit() {
    this.treeSelectItemsViewContainerRef.next(this.viewContainerRef ?? null);
  }
}
