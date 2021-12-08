import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ZyfraMenuAppItem, ZyfraMenuAppTransitionSettings } from './zyfra-menu-applications.interface';

@Component({
  selector: 'zyfra-menu-applications',
  templateUrl: './zyfra-menu-applications.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraMenuApplicationsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef<HTMLDivElement>;

  @Input() transition: ZyfraMenuAppTransitionSettings = {
    open: {
      duration: 300,
      delay: 500,
      timingFunction: 'ease-in',
    },
    close: {
      duration: 300,
      delay: 300,
      timingFunction: 'ease-out',
    },
  };
  @Input() hintDelay = 1000;
  @Input() topMenuItems: ZyfraMenuAppItem[] = [];
  @Input() bottomMenuItems: ZyfraMenuAppItem[] = [];
  @Input() activeItem: ZyfraMenuAppItem | null = null;

  @Output() selectItem = new EventEmitter<ZyfraMenuAppItem>();
  @Output() toggleState = new EventEmitter<boolean>();

  transitionDelayEnable = true;
  private destroy$ = new Subject();
  private _isOpen = true;

  set isOpen(isOpen: boolean) {
    this._isOpen = isOpen;
    this.toggleState.emit(this.isOpen);
    this.cdr.detectChanges();
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setInitialPanelSizes();
  }

  private setInitialPanelSizes(): void {
    const menuSplitter = this.elementRef.nativeElement.querySelector('.menu-splitter');
    const panelBottom = this.elementRef.nativeElement.querySelector('.menu-applications-list__bottom');
    const splitterPanels = this.elementRef.nativeElement.querySelectorAll('.menu-splitter__panel');

    if (!menuSplitter || !panelBottom || !splitterPanels.length || splitterPanels.length !== 2) {
      return;
    }

    const bottomPanelSize = Math.ceil((panelBottom.offsetHeight / menuSplitter.offsetHeight) * 100);

    this.renderer.setStyle(splitterPanels[0], 'flex-basis', 'calc(' + (100 - bottomPanelSize) + '%)');
    this.renderer.setStyle(splitterPanels[1], 'flex-basis', 'calc(' + bottomPanelSize + '%)');
  }

  get transitionStyles(): Record<string, string> {
    let transitionDelay: number;

    if (this.transitionDelayEnable) {
      transitionDelay = this.isOpen ? this.transition.open.delay : this.transition.close.delay;
    } else {
      transitionDelay = 0;
    }

    return {
      'transition-delay': `${transitionDelay}ms`,
      'transition-duration': `${
        this.isOpen ? this.transition.open.duration : this.transition.close.duration
      }ms`,
      'transition-timing-function': this.isOpen
        ? this.transition.open.timingFunction
        : this.transition.close.timingFunction,
    };
  }

  @HostListener('mouseenter')
  onMouseEnterHandler(): void {
    this.open(true);
  }

  @HostListener('mouseleave')
  onMouseOutHandler(): void {
    this.close(true);
  }

  toggle(withDelay = false): void {
    if (withDelay) {
      this.toggleWithDelay();
    } else {
      this.toggleWithoutDelay();
    }
  }

  private toggleWithDelay(): void {
    this.transitionDelayEnable = true;
    this.isOpen = !this.isOpen;
  }

  private toggleWithoutDelay(): void {
    this.transitionDelayEnable = false;
    this.isOpen = !this.isOpen;
  }

  open(withDelay = false): void {
    if (withDelay) {
      this.openWithDelay();
    } else {
      this.openWithoutDelay();
    }
  }

  private openWithDelay(): void {
    if (!this.isOpen) {
      this.toggleWithDelay();
    }
  }

  private openWithoutDelay(): void {
    if (!this.isOpen) {
      this.toggleWithoutDelay();
    }
  }

  close(withDelay = false): void {
    if (withDelay) {
      this.closeWithDelay();
    } else {
      this.closeWithoutDelay();
    }
  }

  private closeWithDelay(): void {
    if (this.isOpen) {
      this.toggleWithDelay();
    }
  }

  private closeWithoutDelay(): void {
    if (this.isOpen) {
      this.toggleWithoutDelay();
    }
  }

  selectItemHandler(item: ZyfraMenuAppItem): void {
    this.selectItem.emit(item);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
