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

@Component({
  selector: 'prizm-input-tree-select-data-list-wrapper',
  templateUrl: './tree-select-data-list-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, PrizmDataListWrapperComponent],
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
  readonly treeSelectItemsDirective = inject(PrizmTreeSelectItemsDirective);
  readonly treeSelectItemsViewContainerRef = inject(PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF);

  ngOnInit() {
    this.treeSelectItemsViewContainerRef.next(this.viewContainerRef ?? null);
  }
}
