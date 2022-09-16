import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  OnDestroy,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  OnInit,
  HostBinding,
} from '@angular/core';
import { ITab, TabSize, TabType } from './tabs.interface';
import { animationFrameScheduler, Subject, Subscription } from 'rxjs';
import { debounceTime, observeOn } from 'rxjs/operators';

@Component({
  selector: 'zui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.data-size') public size: TabSize = 'adaptive';
  @Input() public type: TabType = 'line';
  @Input() public tabs: ITab[] = [];
  @Input() public closable = false;
  @Input() public selectedTabNumber = 0;

  @Output() public cancelClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() public tabClick: EventEmitter<void> = new EventEmitter();
  @ViewChild('tabsContainer', { static: true }) public tabsContainer: ElementRef;
  @ViewChildren('zuiTab', { read: ElementRef }) public tabElements: QueryList<ElementRef>;

  @HostBinding('attr.testId')
  readonly testId = 'zui_tabs';

  public openLeft = false;
  public openRight = false;

  public isLeftBtnActive = false;
  public isRightBtnActive = false;

  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private mutationDetector$: Subject<void> = new Subject<void>();
  private subscription: Subscription = new Subscription();

  constructor(private readonly cdRef: ChangeDetectorRef) {}
  public ngOnInit(): void {
    this.mutationObserver = new MutationObserver(() => this.mutationDetector$.next());
    this.resizeObserver = new ResizeObserver(() => this.mutationDetector$.next());
    this.mutationObserver.observe(this.tabsContainer.nativeElement, {
      attributes: true,
      characterData: true,
      childList: true,
    });
    this.resizeObserver.observe(this.tabsContainer.nativeElement);

    this.subscription = this.mutationDetector$
      .pipe(debounceTime(200), observeOn(animationFrameScheduler))
      .subscribe(() => this.overflowChecker());
  }

  public ngOnDestroy(): void {
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    this.mutationDetector$.complete();
    this.subscription.unsubscribe();
  }

  public tabCancelClick(idx: number): void {
    if (this.tabs.length < 2) return;
    this.tabs = this.tabs.filter((item, i) => i !== idx);
    this.selectedTabNumber =
      this.selectedTabNumber === idx ? this.getNextSelectedTab(idx) : this.selectedTabNumber;
    this.cancelClick.emit();
  }

  public tabClickHandler(idx: number): void {
    this.selectedTabNumber = idx;
    this.tabClick.emit();
    this.focusTabByIdx(idx);
  }

  public increase(): void {
    const tabsContainerElement: HTMLElement = this.tabsContainer.nativeElement;
    const scrollLeft =
      tabsContainerElement.scrollLeft + (1.5 * tabsContainerElement.offsetWidth) / this.tabs.length;
    this.calculateControlsState(scrollLeft);
    tabsContainerElement.scrollLeft = scrollLeft;
  }

  public decrease(): void {
    const tabsContainerElement: HTMLElement = this.tabsContainer.nativeElement;
    const scrollLeft =
      tabsContainerElement.scrollLeft - (1.5 * tabsContainerElement.offsetWidth) / this.tabs.length;
    this.calculateControlsState(scrollLeft);
    tabsContainerElement.scrollLeft = scrollLeft;
  }

  private getNextSelectedTab(prevIdx: number): number {
    if (prevIdx === 0) {
      return 0;
    } else {
      return prevIdx - 1;
    }
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
