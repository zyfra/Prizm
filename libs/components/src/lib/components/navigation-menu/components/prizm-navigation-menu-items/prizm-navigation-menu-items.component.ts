import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';
import { PrizmHandler } from '../../../../types';
import { InternalPrizmNavigationMenuItem, ViewMode } from '../../interfaces';
import { PrizmNavigationMenuItemComponent } from '../prizm-navigation-menu-item/prizm-navigation-menu-item.component';
import { findItem } from '../../helpers/prizm-navigation-menu-items-helpers';

@Component({
  selector: 'prizm-navigation-menu-items',
  templateUrl: './prizm-navigation-menu-items.component.html',
  styleUrls: ['./prizm-navigation-menu-items.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNavigationMenuItemsComponent<T extends { children?: unknown[] }> {
  @ViewChildren(PrizmNavigationMenuItemComponent) private menuItemsList: QueryList<
    PrizmNavigationMenuItemComponent<T>
  >;

  @Output() itemExpandedChanged = new EventEmitter<{
    item: InternalPrizmNavigationMenuItem<T>;
    isExpanded: boolean;
  }>();

  @Output() activeItemChanged = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();

  @Output() goToParentItem = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();

  @Output() goToRootItem = new EventEmitter<InternalPrizmNavigationMenuItem<T>>();

  @Input() items: InternalPrizmNavigationMenuItem<T>[];
  @Input() mode: ViewMode;
  @Input() activeItem: InternalPrizmNavigationMenuItem<T>;
  @Input() itemExtraTemplate: TemplateRef<unknown>;
  @Input() expandedItemsMap: Map<InternalPrizmNavigationMenuItem<T>, boolean> = new Map<
    InternalPrizmNavigationMenuItem<T>,
    boolean
  >();

  constructor(public cdr: ChangeDetectorRef) {}

  public handleExpandedChanged({
    value,
    isExpanded,
  }: {
    value: InternalPrizmNavigationMenuItem<T>;
    isExpanded: boolean;
  }): void {
    this.itemExpandedChanged.emit({
      item: value,
      isExpanded,
    });
  }

  public treeChildrenHandler: PrizmHandler<
    InternalPrizmNavigationMenuItem<T>,
    readonly InternalPrizmNavigationMenuItem<T>[]
  > = item => item.children || PRIZM_EMPTY_ARRAY;

  public getItemIsExpanded(item: InternalPrizmNavigationMenuItem<T>): boolean {
    return this.expandedItemsMap.get(item);
  }

  public getItemIsActive(item: InternalPrizmNavigationMenuItem<T>): boolean {
    if (item === this.activeItem) return true;

    if (!this.getItemIsExpanded(item) && item.children && this.mode !== 'rubricator') {
      const anyActiveChild = findItem(item.children, item => item === this.activeItem);
      return !!anyActiveChild;
    }

    return false;
  }

  public triggerCdr(): void {
    this.cdr.markForCheck();
    this.menuItemsList?.forEach(itemComponent => itemComponent.cdr.markForCheck());
  }
}
