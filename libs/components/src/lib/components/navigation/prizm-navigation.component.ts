import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { INavigationTree, StatusDictionary } from './navigation.interfaces';
import { IndicatorStatus } from '../indicator';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { skip } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { ExpandedNavigationItemService } from './services/expanded-navigation.service';

@Component({
  selector: 'prizm-navigation',
  templateUrl: './prizm-navigation.component.html',
  styleUrls: ['./prizm-navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ActiveNavigationItemService, ExpandedNavigationItemService],
})
export class PrizmNavigationComponent extends PrizmAbstractTestId {
  @Input() public set data(tree: INavigationTree[]) {
    tree.forEach(treeItem => this.calculateStatuses(treeItem));

    this.menuItems = tree;
    this.expandedSerivce.itemsState = this.menuItems;
  }
  @Input() set activeElement(el: INavigationTree) {
    this.activeItemService.activeItem = el;
  }
  @Output() activeItemChange = this.activeItemService.activeItem$.pipe(skip(1));
  @Output() expandedItemsChange = this.expandedSerivce.itemsState$.pipe(skip(1));

  public menuItems: INavigationTree[] = [];

  override readonly testId_ = 'ui_navigation';
  constructor(
    private readonly activeItemService: ActiveNavigationItemService,
    private readonly expandedSerivce: ExpandedNavigationItemService
  ) {
    super();
  }

  public calculateStatuses(data: INavigationTree): void {
    if (data?.children?.length && data.children.length > 0) {
      data.children.forEach(child => this.calculateStatuses(child));

      let maxStatus = -1;

      data.children
        .filter(child => child?.indicatorStatus)
        .forEach(child => {
          maxStatus =
            StatusDictionary[child.indicatorStatus as IndicatorStatus] > maxStatus
              ? StatusDictionary[child.indicatorStatus as IndicatorStatus]
              : maxStatus;
        });

      data.indicatorStatus = StatusDictionary[maxStatus] as IndicatorStatus;
    }
  }
}
