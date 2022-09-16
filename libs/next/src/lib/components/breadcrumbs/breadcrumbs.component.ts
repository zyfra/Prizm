import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit, HostBinding,
} from '@angular/core';
import { IBreadcrumb } from './breadcrumb.interface';
import { animationFrameScheduler, BehaviorSubject, merge, Subject } from 'rxjs';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { debounceTime, observeOn, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'zui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() set breadcrumbs(data: IBreadcrumb[]) {
    this.breadcrumbs$.next(data);
  }

  public get breadcrumbs(): IBreadcrumb[] {
    return this.breadcrumbs$.getValue();
  }

  @HostBinding('attr.testId')
  readonly testId = 'zui_breadcrumbs';

  @Output() public breadcrumbChange: EventEmitter<IBreadcrumb> = new EventEmitter();
  @ViewChild('container', { static: true }) public containerRef: ElementRef;
  @ViewChild('breadcrumbsFake', { static: true }) public fakeBreadcrumbContainer: ElementRef;
  @ViewChildren('breadcrumb', { read: ElementRef }) public breadcrumbsList: QueryList<ElementRef>;

  public breadcrumbs$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);
  public breadcrumbsToShow$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);
  public breadcrumbsInMenu$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);

  public isDropdownOpened = false;
  public isContainerOverflowed = false;
  public breadcrumbsElementsWidth: number;

  public get activeBreadcrumbIdx(): number {
    return this.breadcrumbsToShow$.getValue().length - 1;
  }

  private resizeObserver: ResizeObserver;
  private mutationDetector$: Subject<void> = new Subject<void>();

  constructor(private readonly cdRef: ChangeDetectorRef, private readonly destroy: ZuiDestroyService) {}

  public changeBreadcrumb(idx: number): void {
    this.breadcrumbs = this.breadcrumbs.filter((item, i) => i <= idx);
    this.breadcrumbChange.emit(this.breadcrumbs[idx]);
  }

  public ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => this.mutationDetector$.next());
    this.resizeObserver.observe(this.containerRef.nativeElement);
  }

  public ngAfterViewInit(): void {
    const $mutation = this.mutationDetector$.pipe(
      debounceTime(200),
      observeOn(animationFrameScheduler),
      tap(() => {
        this.calculateOverflowState();
        this.setViewBreadcrumbs(this.breadcrumbs);
      })
    );

    const $breadcrumbsChange = this.breadcrumbs$.pipe(
      debounceTime(200),
      observeOn(animationFrameScheduler),
      tap(item => {
        this.calculateBreadcrumbsWidth();
        this.calculateOverflowState();
        this.setViewBreadcrumbs(item);
      })
    );

    merge($breadcrumbsChange, $mutation)
      .pipe(debounceTime(200), takeUntil(this.destroy))
      .subscribe(() => this.cdRef.detectChanges());
  }

  public ngOnDestroy(): void {
    this.resizeObserver.disconnect();
    this.mutationDetector$.complete();
  }

  private calculateOverflowState(): void {
    const containerWidth = this.containerRef.nativeElement.clientWidth;
    const contentWidth = this.breadcrumbsElementsWidth;

    if (contentWidth > containerWidth) {
      this.isContainerOverflowed = this.breadcrumbs.length > 2;
    } else {
      this.isDropdownOpened = false;
      this.isContainerOverflowed = false;
    }
  }

  private calculateBreadcrumbsWidth(): void {
    this.breadcrumbsElementsWidth = this.fakeBreadcrumbContainer.nativeElement.clientWidth;
  }

  private setViewBreadcrumbs(breadcrumbs: IBreadcrumb[]): void {
    if (this.isContainerOverflowed) {
      this.breadcrumbsInMenu$.next(breadcrumbs.filter((item, i) => i > 0 && i < breadcrumbs.length - 1));
      this.breadcrumbsToShow$.next(breadcrumbs.filter((item, i) => i === 0 || i === breadcrumbs.length - 1));
    } else {
      this.breadcrumbsInMenu$.next([]);
      this.breadcrumbsToShow$.next(breadcrumbs);
    }
  }
}
