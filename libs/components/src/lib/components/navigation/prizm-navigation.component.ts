import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { INavigationTree, StatusDictionary } from './navigation.interfaces';
import { IndicatorStatus } from '../indicator';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { skip } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-navigation',
  templateUrl: './prizm-navigation.component.html',
  styleUrls: ['./prizm-navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNavigationComponent extends PrizmAbstractTestId {
  @Input() public set data(tree: INavigationTree[]) {
    tree.forEach(treeItem => this.calculateStatuses(treeItem));

    this.menuItems = tree;
  }
  @Input() set activeElement(el: INavigationTree) {
    this.activeItemService.activeItem = el;
  }
  @Output() activeItemChange = this.activeItemService.activeItem$.pipe(skip(1));

  public menuItems: INavigationTree[] = [];

  override readonly testId_ = 'ui_navigation';
  constructor(private readonly activeItemService: ActiveNavigationItemService) {
    super();
  }

  public calculateStatuses(data: INavigationTree): void {
    if (data?.children?.length > 0) {
      data.children.forEach(child => this.calculateStatuses(child));

      let maxStatus = -1;

      data.children
        .filter(child => child?.indicatorStatus)
        .forEach(child => {
          maxStatus =
            StatusDictionary[child.indicatorStatus] > maxStatus
              ? StatusDictionary[child.indicatorStatus]
              : maxStatus;
        });

      data.indicatorStatus = StatusDictionary[maxStatus] as IndicatorStatus;
    }
  }
}
