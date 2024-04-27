import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { INavigationTree } from './../../navigation.interfaces';
import { expandAnimation } from '../../../accordion/accordion.animation';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsAngleRight, prizmIconsFolder } from '@prizm-ui/icons/full/source';
import { prizmIsTextOverflow } from '../../../../util';

@Component({
  selector: 'prizm-navigation-item-expandable',
  templateUrl: './prizm-navigation-item-expandable.component.html',
  styleUrls: ['./prizm-navigation-item-expandable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
})
export class PrizmNavigationItemExpandableComponent extends PrizmAbstractTestId implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @Input() public set data(tree: INavigationTree) {
    this.data$.next(tree);
  }
  @Input() public deep!: number;

  public isExpanded = false;
  override readonly testId_ = 'ui_navigation--item-expandable';

  readonly prizmIsTextOverflow = prizmIsTextOverflow;

  public data$ = new BehaviorSubject<INavigationTree | null>(null);
  public isActive$: Observable<boolean> = combineLatest([
    this.activeItemService.activeItem$,
    this.data$,
  ]).pipe(map(([activeItem, data]) => activeItem === data));

  public get menuItem(): INavigationTree | null {
    return this.data$.getValue();
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  private resizeObserver!: ResizeObserver;

  constructor(
    public activeItemService: ActiveNavigationItemService,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsFolder, prizmIconsAngleRight);
  }

  public ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.cdRef.markForCheck();
    });
    this.resizeObserver.observe(this.container.nativeElement);
  }

  public ngOnDestroy(): void {
    this.resizeObserver.disconnect();
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
