import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnDestroy,
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
import { PrizmInputCommonModule, PrizmInputTextComponent } from '../../input';
import { PrizmTreeSelectSearchDirective } from './search/tree-select-search.directive';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PrizmTreeSelectEmptyTextDirective } from './tree-select-empty-text.directive';
import { PrizmTreeSelectSearchLabelDirective } from './tree-select-search-label.directive';
import { PolymorphOutletDirective, PrizmAutoFocusDirective } from '../../../directives';
import { FormsModule } from '@angular/forms';

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
    PrizmInputTextComponent,
    PolymorphOutletDirective,
    FormsModule,
    PrizmInputCommonModule,
    PrizmAutoFocusDirective,
  ],
  providers: [
    PrizmDestroyService,
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
export class PrizmTreeSelectDataListWrapperComponent
  extends PrizmAbstractTestId
  implements OnInit, OnDestroy
{
  @Input() projectedDataListDirective?: PrizmDataListDirective;
  @Input() parentDropdownHost!: PrizmDropdownHostComponent;
  override testId_ = 'ui_tree_select_data_list_wrapper';
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef?: ViewContainerRef;
  readonly treeSelectSearchDirective = inject(PrizmTreeSelectSearchDirective);
  readonly treeSelectEmptyTextDirective = inject(PrizmTreeSelectEmptyTextDirective);
  readonly treeSelectSearchLabelDirective = inject(PrizmTreeSelectSearchLabelDirective);
  readonly treeSelectItemsViewContainerRef = inject(PRIZM_TREE_SELECT_ITEMS_VIEW_CONTAINER_REF);
  readonly destroy = inject(PrizmDestroyService);
  protected emptyLeast$ = this.treeSelectSearchDirective.hasEmptyList$.pipe(
    debounceTime(50),
    tap(() => this.parentDropdownHost.reCalculatePositions())
  );

  ngOnInit() {
    this.treeSelectItemsViewContainerRef.next(this.viewContainerRef ?? null);
    this.initDropdownUpdateOnSearch();
  }

  ngOnDestroy(): void {
    this.treeSelectSearchDirective.clear();
  }

  private initDropdownUpdateOnSearch() {
    this.treeSelectSearchDirective.searched
      .pipe(
        tap(() => {
          this.parentDropdownHost.reCalculatePositions(0);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
}
