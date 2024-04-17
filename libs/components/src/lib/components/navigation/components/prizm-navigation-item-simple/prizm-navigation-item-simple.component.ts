import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { INavigationTree } from '../../navigation.interfaces';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { map } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { prizmIsTextOverflow } from '../../../../util';

@Component({
  selector: 'prizm-navigation-item-simple',
  templateUrl: './prizm-navigation-item-simple.component.html',
  styleUrls: ['./prizm-navigation-item-simple.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNavigationItemSimpleComponent extends PrizmAbstractTestId implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @Input() public set data(tree: INavigationTree) {
    this.data$.next(tree);
  }
  @Input() public deep!: number;
  override readonly testId_ = 'ui_navigation--item-simple';
  readonly prizmIsTextOverflow = prizmIsTextOverflow;

  public data$: BehaviorSubject<INavigationTree | null> = new BehaviorSubject<INavigationTree | null>(null);
  public isActive$: Observable<boolean> = combineLatest([
    this.activeItemService.activeItem$,
    this.data$,
  ]).pipe(map(([activeItem, data]) => activeItem === data));

  public get menuItem(): INavigationTree | null {
    return this.data$.getValue();
  }

  private resizeObserver!: ResizeObserver;

  constructor(
    public activeItemService: ActiveNavigationItemService,
    private readonly cdRef: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.cdRef.markForCheck();
    });
    this.resizeObserver.observe(this.container.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

  public navClick(): void {
    const data = this.data$.getValue();
    const current = this.activeItemService.activeItem$.getValue();
    this.activeItemService.activeItem = current === data ? null : data;
  }
}
