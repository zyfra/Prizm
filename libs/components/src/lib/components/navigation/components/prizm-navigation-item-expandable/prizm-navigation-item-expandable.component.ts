import { Component, ChangeDetectionStrategy, Input, inject, ViewChild, ElementRef } from '@angular/core';
import { INavigationTree } from './../../navigation.interfaces';
import { expandAnimation } from '../../../accordion/accordion.animation';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsAngleRight, prizmIconsFolder } from '@prizm-ui/icons/full/source';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ExpandedNavigationItemService } from '../../services/expanded-navigation.service';

@Component({
  selector: 'prizm-navigation-item-expandable',
  templateUrl: './prizm-navigation-item-expandable.component.html',
  styleUrls: ['./prizm-navigation-item-expandable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
})
export class PrizmNavigationItemExpandableComponent extends PrizmAbstractTestId {
  @ViewChild('container', { static: true }) container!: ElementRef;

  @Input() public deep!: number;

  @Input({ transform: coerceBooleanProperty }) public isExpanded = false;

  @Input() public set data(tree: INavigationTree) {
    this.data$.next(tree);
  }

  override readonly testId_ = 'ui_navigation--item-expandable';

  public data$ = new BehaviorSubject<INavigationTree | null>(null);
  public isActive$: Observable<boolean> = combineLatest([
    this.activeItemService.activeItem$,
    this.data$,
  ]).pipe(map(([activeItem, data]) => activeItem === data));

  public get menuItem(): INavigationTree | null {
    return this.data$.getValue();
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    public activeItemService: ActiveNavigationItemService,
    public expandedService: ExpandedNavigationItemService
  ) {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsFolder, prizmIconsAngleRight);
  }

  public toggle($event: Event): void {
    $event.stopPropagation();
    this.isExpanded = !this.isExpanded;
    this.expandedService.updateExpanded(this.menuItem!, this.isExpanded);
  }

  public navClick(): void {
    const data = this.data$.getValue();
    const current = this.activeItemService.activeItem$.getValue();
    this.activeItemService.activeItem = current === data ? null : data;
  }
}
