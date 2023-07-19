import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { PrizmTabSize } from './tabs.interface';
import { animationFrameScheduler, Subject, Subscription } from 'rxjs';
import { debounceTime, filter, observeOn, takeUntil, tap } from 'rxjs/operators';
import { PrizmTabsService } from './tabs.service';
import { PrizmTabComponent } from './components/tab.component';
import { PrizmTabMenuItemDirective } from './tab-menu-item.directive';
import { PrizmDropdownHostComponent } from '../dropdowns/dropdown-host';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTabCanOpen } from './tabs.model';

@Component({
  selector: 'prizm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmTabsService, PrizmDestroyService],
})
export class PrizmTabsComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.data-size') public size: PrizmTabSize = 'adaptive';
  @Input() public set activeTabIndex(idx: number) {
    if (idx === this.tabsService.activeTabIdx) return;
    this.tabsService.updateActiveTab(idx);
  }
  get activeTabIndex(): number {
    return this.tabsService.activeTabIdx;
  }
  @Input() canShowMenu = true;
  @Input() set canOpen(func: PrizmTabCanOpen | null) {
    this.tabsService.canOpenTab = func;
  }
  get canOpen() {
    return this.tabsService.canOpenTab;
  }
  @Output() readonly activeTabIndexChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('tabsContainer', { static: true }) public tabsContainer: ElementRef;
  @ViewChild('tabsDropdown', { static: true }) public tabsDropdown: PrizmDropdownHostComponent;
  public tabsMoreDropdown: PrizmDropdownHostComponent;
  @ContentChildren(PrizmTabComponent, { descendants: true }) public tabElements: QueryList<PrizmTabComponent>;
  @ContentChildren(PrizmTabMenuItemDirective, { read: TemplateRef, descendants: true })
  public menuElements: QueryList<TemplateRef<PrizmTabComponent>>;

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_tabs';

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
    private readonly destroy$: PrizmDestroyService,
    private readonly tabsService: PrizmTabsService
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
    this.initTabClickListener();

    this.subscription.add(
      this.mutationDetector$
        .pipe(debounceTime(200), observeOn(animationFrameScheduler))
        .subscribe(() => this.overflowChecker())
    );
  }

  private initTabClickListener(): void {
    this.tabsService.activeTabIdx$
      .pipe(
        tap(idx => {
          this.tabClickHandler(idx);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
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
    if (!this.tabElements?.length) return;
    let tabsWidth = 0;
    const tabContainerElement = this.tabsContainer.nativeElement;
    this.tabElements.forEach(item => {
      tabsWidth += item?.el.nativeElement.clientWidth;
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
    if (!this.tabElements?.length) return;
    const selectedTabElement = this.tabElements.find((item, index) => index === idx)?.el.nativeElement;
    if (!selectedTabElement) return;
    this.tabsContainer.nativeElement.scrollLeft =
      selectedTabElement.offsetLeft -
      this.tabsContainer.nativeElement.offsetWidth / 2 +
      selectedTabElement.offsetWidth / 2;
    this.mutationDetector$.next();
  }

  public reCalculatePositions(): void {
    (this.tabsDropdown ?? this.tabsMoreDropdown)?.reCalculatePositions();
  }

  public closeTab(idx: number): void {
    this.tabsService.getTabByIdx(idx)?.closeTab.emit();
    this.reCalculatePositions();
  }
}
