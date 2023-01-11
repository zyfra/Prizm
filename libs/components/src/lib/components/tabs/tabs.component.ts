import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PrizmTabSize, PrizmTabType } from './tabs.interface';
import { animationFrameScheduler, Subject, Subscription } from 'rxjs';
import { debounceTime, observeOn } from 'rxjs/operators';
import { PrizmTabsService } from './tabs.service';

@Component({
  selector: 'prizm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmTabsService,
  ]
})
export class PrizmTabsComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.data-size') public size: PrizmTabSize = 'adaptive';
  @Input() public set activeTabIndex(idx: number) {
    this.tabsService.activeTabIdx$$.next(idx);
  }
  get activeTabIndex(): number {
    return this.tabsService.activeTabIdx$$.value;
  }
  @Output() public activeTabIndexChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('tabsContainer', { static: true }) public tabsContainer: ElementRef;
  @ViewChildren('prizmTab', { read: ElementRef }) public tabElements: QueryList<ElementRef>;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_tabs';

  public openLeft = false;
  public openRight = false;

  public isLeftBtnActive = false;
  public isRightBtnActive = false;

  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private mutationDetector$: Subject<void> = new Subject<void>();
  private subscription: Subscription = new Subscription();

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly tabsService: PrizmTabsService,
  ) {}

  public ngOnInit(): void {
    this.mutationObserver = new MutationObserver(() => this.mutationDetector$.next());
    this.resizeObserver = new ResizeObserver(() => this.mutationDetector$.next());
    this.mutationObserver.observe(this.tabsContainer.nativeElement, {
      attributes: true,
      characterData: true,
      childList: true,
    });
    this.resizeObserver.observe(this.tabsContainer.nativeElement);

    this.subscription.add(this.mutationDetector$
      .pipe(debounceTime(200), observeOn(animationFrameScheduler))
      .subscribe(() => this.overflowChecker()));
  }

  public ngOnDestroy(): void {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    this.mutationDetector$.complete();
    this.subscription.unsubscribe();
  }

  public tabClickHandler(idx: number): void {
    this.activeTabIndex = idx;
    this.activeTabIndexChange.emit(this.activeTabIndex);
    this.focusTabByIdx(idx);
  }

  public increase(): void {
    const tabsContainerElement: HTMLElement = this.tabsContainer.nativeElement;
    const scrollLeft =
      tabsContainerElement.scrollLeft + (1.5 * tabsContainerElement.offsetWidth) / this.tabsService.tabs.size;
    this.calculateControlsState(scrollLeft);
    tabsContainerElement.scrollLeft = scrollLeft;
  }

  public decrease(): void {
    const tabsContainerElement: HTMLElement = this.tabsContainer.nativeElement;
    const scrollLeft =
      tabsContainerElement.scrollLeft - (1.5 * tabsContainerElement.offsetWidth) / this.tabsService.tabs.size;
    this.calculateControlsState(scrollLeft);
    tabsContainerElement.scrollLeft = scrollLeft;
  }

  private calculateControlsState(scrollLeft: number): void {
    const tabsContainerElement: HTMLElement = this.tabsContainer.nativeElement;
    const scrollWidth = tabsContainerElement.scrollWidth;
    const offsetWidth = tabsContainerElement.offsetWidth;
    this.isLeftBtnActive = scrollLeft > 20;
    this.isRightBtnActive = scrollWidth - offsetWidth - scrollLeft > 20;
  }

  private overflowChecker(): void {
    let tabsWidth = 0;
    const tabContainerElement = this.tabsContainer.nativeElement;
    this.tabElements.forEach(item => {
      tabsWidth += item?.nativeElement.clientWidth;
    });

    if (tabsWidth > tabContainerElement.clientWidth) {
      const scrollLeft = tabContainerElement.scrollLeft;
      if (scrollLeft === 0) {
        this.isRightBtnActive = true;
      } else {
        this.calculateControlsState(scrollLeft);
      }
    } else {
      this.isRightBtnActive = false;
      this.isLeftBtnActive = false;
      this.openLeft = false;
      this.openRight = false;
    }

    this.cdRef.markForCheck();
  }

  private focusTabByIdx(idx: number): void {
    const selectedTabElement = this.tabElements.find((item, index) => index === idx).nativeElement;
    this.tabsContainer.nativeElement.scrollLeft =
      selectedTabElement.offsetLeft -
      this.tabsContainer.nativeElement.offsetWidth / 2 +
      selectedTabElement.offsetWidth / 2;
    this.mutationDetector$.next();
  }
}
