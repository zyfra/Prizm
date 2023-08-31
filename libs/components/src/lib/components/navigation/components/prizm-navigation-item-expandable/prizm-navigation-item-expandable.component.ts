import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { INavigationTree } from './../../navigation.interfaces';
import { expandAnimation } from '../../../accordion/accordion.animation';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';

@Component({
  selector: 'prizm-navigation-item-expandable',
  templateUrl: './prizm-navigation-item-expandable.component.html',
  styleUrls: ['./prizm-navigation-item-expandable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
})
export class PrizmNavigationItemExpandableComponent extends PrizmAbstractTestId {
  @Input() public set data(tree: INavigationTree) {
    this.data$.next(tree);
  }
  @Input() public deep!: number;

  public isExpanded = false;
  override readonly testId_ = 'ui_navigation--item-expandable';

  public data$ = new BehaviorSubject<INavigationTree | null>(null);
  public isActive$: Observable<boolean> = combineLatest([
    this.activeItemService.activeItem$,
    this.data$,
  ]).pipe(map(([activeItem, data]) => activeItem === data));

  public get menuItem(): INavigationTree | null {
    return this.data$.getValue();
  }

  constructor(public activeItemService: ActiveNavigationItemService) {
    super();
  }

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
