import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { fromEvent, merge, Subject } from 'rxjs';
import { TabView } from 'primeng/tabview';
import { ZyfraTabPanelComponent } from '../zyfra-tab-panel/zyfra-tab-panel.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'zyfra-tab-view',
  templateUrl: './zyfra-tab-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZyfraTabViewComponent implements AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @HostBinding('class.scrolled-to-start') disablePrevControl: boolean;
  @HostBinding('class.scrolled-to-end') disableNextControl: boolean;
  @HostBinding('class.has-overflow') hasOverflow: boolean;
  @ViewChild(TabView) public tabView: TabView;
  @ViewChild('prevControl') public prevControl: ElementRef;
  @ViewChild('nextControl') public nextControl: ElementRef;
  @ContentChildren(ZyfraTabPanelComponent) tabPanels: QueryList<ZyfraTabPanelComponent>;
  @Input() activeIndex: number | null = null;
  @Input() controlClose = false;
  @Input() style: any | null = null;
  @Input() styleClass: string | null = null;

  @Output() activeIndexChange: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  public tabs: ZyfraTabPanelComponent[] = [];
  public tabList: { header: string; index: number; disabled: boolean }[] = [];

  private tabsChanged = true;
  private tabClosed = false;
  private maxScrollDistance: number;
  private navLinks: NodeListOf<HTMLElement>;
  private lastFocused: Element;
  private navContentElement: HTMLElement;
  private destroyed$: Subject<any> = new Subject();
  private tabsChanged$: Subject<any> = new Subject();
  private keyDownHandler = (e: KeyboardEvent): void => {
    // use an arrow function to access the context of the component
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') {
      return;
    }
    switch (e.key) {
      case 'ArrowLeft':
        this.focusPrev();
        break;
      case 'ArrowRight':
        this.focusNext();
        break;
    }
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  public ngAfterContentInit(): void {
    this.tabsInit();
    this.tabPanels.changes.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.tabsChanged$.next();
      this.tabsInit();
    });
  }

  public ngAfterViewInit(): void {
    this.navContentElement = this.tabView.content.nativeElement;
    this.navContentElement.addEventListener('keydown', this.keyDownHandler);
    fromEvent(this.navContentElement, 'scroll')
      .pipe(debounceTime(50), takeUntil(this.destroyed$))
      .subscribe(() => this.updateControlsState());
  }

  private initialPrepare(): void {
    this.navLinks = this.navContentElement.querySelectorAll('a.p-tabview-nav-link');
    const highlight = this.navContentElement.querySelector('li.p-highlight');
    let focusPresent = false;
    this.navLinks.forEach((value) => {
      if (this.lastFocused === value) {
        focusPresent = true;
      }
    });
    if (!focusPresent) {
      this.lastFocused = highlight ? highlight.firstElementChild : this.navLinks.item(0);
    }
  }

  public ngAfterViewChecked(): void {
    if (this.tabsChanged || this.tabClosed) {
      requestAnimationFrame(() => {
        this.hasOverflow = this.navContentElement.scrollWidth > this.navContentElement.offsetWidth;
        this.updateControlsState();
        if (this.tabsChanged) {
          this.initialPrepare();
        }
        this.tabsChanged = false;
        this.tabClosed = false;
        this.cdr.markForCheck();
      });
    }
  }

  public ngOnDestroy(): void {
    this.removeListeners();
    this.tabsChanged$.next();
    this.tabsChanged$.complete();
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public activeIndexChangeHandler(event): void {
    this.activeIndex = event;
    this.activeIndexChange.emit(event);
  }

  public handleChange(event): void {
    this.onChange.emit(event);
    this.changeFocus(this.navLinks.item(event.index));
  }

  public handleClose(event): void {
    const closedTab = event.originalEvent.target.offsetParent;
    this.tabClosed = true;
    this.tabList = this.tabList.filter(({ index }) => index !== event.index);
    if (this.lastFocused === closedTab) {
      this.changeFocus(this.navLinks.item(this.tabList[0].index));
    }
    this.onClose.emit(event);
  }

  public scrollPrevious(): void {
    this.navContentElement.scrollLeft -= this.navContentElement.offsetWidth;
  }

  public scrollNext(): void {
    this.navContentElement.scrollLeft += this.navContentElement.offsetWidth;
  }

  public selectTabFromList(event: MouseEvent, index: number): void {
    this.navLinks.item(index).scrollIntoView({ inline: 'center' });
    if (!this.tabList[index].disabled && this.activeIndex !== index) {
      this.activeIndex = index;
      this.changeFocus(this.navLinks.item(index));
      this.onChange.emit({ originalEvent: event, index });
    }
  }

  private tabsInit(): void {
    this.tabs = this.tabPanels.toArray();
    this.tabList = this.tabs.map((value, index) => ({
      header: value.header,
      index,
      disabled: value.disabled,
    }));

    this.tabsChanged = true;
    merge(...this.tabs.map((value) => value.propChange))
      .pipe(takeUntil(this.tabsChanged$))
      .subscribe(() => {
        this.cdr.markForCheck();
      });
    this.cdr.markForCheck();
  }

  private updateControlsState(): void {
    if (this.hasOverflow) {
      this.maxScrollDistance = this.navContentElement.scrollWidth - this.navContentElement.offsetWidth;
      this.disablePrevControl = this.navContentElement.scrollLeft === 0;
      this.disableNextControl = this.maxScrollDistance - this.navContentElement.scrollLeft < 1;
      this.updateControlsStyles(this.disablePrevControl, this.prevControl.nativeElement);
      this.updateControlsStyles(this.disableNextControl, this.nextControl.nativeElement);
    }
  }

  private updateControlsStyles(isDisabled: boolean, el: HTMLElement): void {
    if (isDisabled) {
      this.renderer.addClass(el, 'disabled');
    } else {
      this.renderer.removeClass(el, 'disabled');
    }
  }

  private removeListeners(): void {
    this.navContentElement.removeEventListener('keydown', this.keyDownHandler);
  }

  private focusPrev(): void {
    const current = this.document.activeElement;
    if (!current.parentElement.previousElementSibling) {
      return;
    }
    const next = current.parentElement.previousElementSibling.firstChild as HTMLElement;
    if (!next) {
      return;
    }
    this.changeFocus(next);
    next.focus();
    if (next.offsetLeft < this.navContentElement.scrollLeft) {
      this.navContentElement.scrollLeft =
        next.offsetLeft + next.offsetWidth - this.navContentElement.offsetWidth;
    }
  }

  private focusNext(): void {
    const current = this.document.activeElement;
    if (!current.parentElement.nextElementSibling) {
      return;
    }
    const next = current.parentElement.nextElementSibling.firstChild as HTMLElement;
    if (!next) {
      return;
    }
    this.changeFocus(next);
    next.focus();
    if (
      next.offsetLeft + next.offsetWidth >
      this.navContentElement.offsetWidth + this.navContentElement.scrollLeft
    ) {
      this.navContentElement.scrollLeft = next.offsetLeft;
    }
  }

  private changeFocus(next: Element): void {
    this.lastFocused = next;
  }
}
