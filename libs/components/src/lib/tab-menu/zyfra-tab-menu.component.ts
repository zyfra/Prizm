import {
  Component,
  Input,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  HostBinding,
  AfterViewChecked,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, filter, first, takeUntil } from 'rxjs/operators';
import { SlideMenu } from 'primeng/slidemenu';
import { DOCUMENT } from '@angular/common';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'zyfra-tab-menu',
  templateUrl: './zyfra-tab-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZyfraTabMenuComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
  @HostBinding('class.scrolled-to-start') disablePrevControl: boolean;
  @HostBinding('class.scrolled-to-end') disableNextControl: boolean;
  @HostBinding('class.has-overflow') hasOverflow: boolean;
  @ViewChild(TabMenu) public tabMenu: TabMenu;
  @ViewChild('tabSubmenuContainer') subMenuContainer: ElementRef;
  @ViewChild('prevControl') public prevControl: ElementRef;
  @ViewChild('nextControl') public nextControl: ElementRef;
  @Input() activeItem: MenuItem = null;
  @Input() style: string = null;
  @Input() styleClass: string = null;
  @Input() set model(items: MenuItem[]) {
    this._model = items;
    this.tabsChanged = true;
  }
  get model(): MenuItem[] {
    return this._model;
  }
  public backLabel = 'Вернуться';
  public openedItem: MenuItem;

  private _model: MenuItem[] = null;
  private tabsChanged: boolean;
  private maxScrollDistance: number;
  private navLinks: NodeListOf<Element>;
  private navListElement: HTMLElement;
  private currentMenu = null;
  private currentMenuIndex: number;
  private subMenuObserver: MutationObserver;
  private destroyed$ = new Subject();
  private scroll$: Observable<Event>;
  private stopOutsideClickListener$ = new Subject();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  public ngAfterViewInit(): void {
    this.navListElement = this.tabMenu.navbar.nativeElement;
    this.navLinks = this.navListElement.querySelectorAll('a.p-menuitem-link');
    this.initClickListeners();
    this.scroll$ = fromEvent(this.navListElement, 'scroll').pipe(debounceTime(50));
    this.scroll$.pipe(takeUntil(this.destroyed$)).subscribe(() => this.updateControlsState());
    this.initSubmenuObserver();
  }

  public ngAfterViewChecked(): void {
    if (this.tabsChanged) {
      this.tabsChanged = false;
      requestAnimationFrame(() => {
        this.hasOverflow = this.navListElement.scrollWidth > this.navListElement.offsetWidth;
        this.updateControlsState();
      });
    }
  }

  public ngOnDestroy(): void {
    this.subMenuObserver.disconnect();
    this.stopOutsideClickListener$.next();
    this.stopOutsideClickListener$.complete();
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public toggleMenu(event: MouseEvent, menu: SlideMenu, index: number): void {
    const currentTarget = (event.target as HTMLElement).closest('li');
    if (this.currentMenu && this.currentMenu !== menu) {
      this.currentMenu.hide();
    }
    const toggleMenu = (): void => {
      menu.toggle({ currentTarget });
      this.currentMenu = menu;
      this.currentMenuIndex = index;
    };

    if (this.isPartlyVisible(event.target as HTMLElement)) {
      currentTarget.scrollIntoView({ inline: 'nearest' });
      this.scroll$.pipe(first(), takeUntil(this.destroyed$)).subscribe(() => toggleMenu());
    } else {
      toggleMenu();
    }
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  public initOutsideClickListener(menu): void {
    this.stopOutsideClickListener$.next();
    fromEvent(this.document, 'click')
      .pipe(takeUntil(this.stopOutsideClickListener$))
      .subscribe((e: PointerEvent) => {
        const clickInside = e.composedPath().includes(this.subMenuContainer.nativeElement);
        if (!clickInside) {
          menu.hide();
          this.stopOutsideClickListener$.next();
        }
      });
  }

  public selectTabFromList(index: number, overlayPanel: OverlayPanel): void {
    if(this.model[index].disabled) return;
    this.activeItem = this.model[index];
    this.navLinks.item(index).scrollIntoView({ inline: 'center' });
    (this.navLinks.item(index) as HTMLElement).click();
    overlayPanel.hide();
  }

  public scrollPrevious(): void {
    this.navListElement.scrollLeft -= this.navListElement.offsetWidth;
  }

  public scrollNext(): void {
    this.navListElement.scrollLeft += this.navListElement.offsetWidth;
  }

  private updateControlsState(): void {
    if (this.hasOverflow) {
      this.maxScrollDistance = this.navListElement.scrollWidth - this.navListElement.offsetWidth;
      this.disablePrevControl = this.navListElement.scrollLeft === 0;
      this.disableNextControl = this.maxScrollDistance - this.navListElement.scrollLeft < 1;
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

  private isPartlyVisible(target: HTMLElement): boolean {
    const offsetParent = target.offsetParent as HTMLElement;
    const isLeftSideHidden =
      offsetParent.offsetLeft - this.navListElement.scrollLeft < this.nextControl.nativeElement.offsetWidth;
    const isRightSideHidden =
      offsetParent.offsetLeft +
        offsetParent.offsetWidth -
        this.nextControl.nativeElement.offsetWidth -
        this.navListElement.scrollLeft >
      this.navListElement.offsetWidth;
    return isLeftSideHidden || isRightSideHidden;
  }

  private initClickListeners(): void {
    fromEvent(this.navListElement, 'click')
      .pipe(takeUntil(this.destroyed$))
      .subscribe((e: MouseEvent) => {
        this.updateCurrentIndex(e.target as HTMLElement);
        this.updateActiveItem();
      });

    fromEvent(this.subMenuContainer.nativeElement, 'click')
      .pipe(
        filter(
          (e: MouseEvent) =>
            !(e.target as HTMLElement).nextElementSibling && e.target instanceof HTMLAnchorElement
        ),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.updateActiveItem();
      });
  }

  private initSubmenuObserver(): void {
    const target = this.subMenuContainer.nativeElement;
    const config = {
      childList: true,
    };
    const callback = (mutations: MutationRecord[]): void => {
      mutations.forEach(() => {
        this.openedItem = this.subMenuContainer.nativeElement.hasChildNodes()
          ? this.model[this.currentMenuIndex]
          : null;
        this.cdr.markForCheck();
      });
    };
    this.subMenuObserver = new MutationObserver(callback);
    this.subMenuObserver.observe(target, config);
  }

  private updateActiveItem(): void {
    this.activeItem = this.model[this.currentMenuIndex];
    this.cdr.markForCheck();
  }

  private updateCurrentIndex(target: HTMLElement): void {
    this.navLinks.forEach((value, key) => {
      if (value === target.closest('a')) {
        this.currentMenuIndex = key;
      }
    });
  }
}
