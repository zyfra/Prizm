import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { INavigationTree } from './../../navigation.interfaces';
import { expandAnimation } from '../../../accordion/accordion.animation';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';

@Component({
  selector: 'prizm-navigation-item-expandable',
  templateUrl: './prizm-navigation-item-expandable.component.html',
  styleUrls: ['./prizm-navigation-item-expandable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
})
export class PrizmNavigationItemExpandableComponent {
  @Input() public set data(tree: INavigationTree) {
    this.data$.next(tree);
  }
  @Input() public deep: number;

  public isExpanded = false;

  public data$: BehaviorSubject<INavigationTree> = new BehaviorSubject<INavigationTree>(null);
  public isActive$: Observable<boolean> = combineLatest([
    this.activeItemService.activeItem$,
    this.data$,
  ]).pipe(map(([activeItem, data]) => activeItem === data));

  public get menuItem(): INavigationTree {
    return this.data$.getValue();
  }

  constructor(public activeItemService: ActiveNavigationItemService) {}

  public toggle($event: Event): void {
    $event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  public navClick(): void {
    const data = this.data$.getValue();
    const current = this.activeItemService.activeItem$.getValue();
    this.activeItemService.activeItem = current === data ? null : data;
  }
}
