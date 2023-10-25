import {
  AfterViewInit,
  Attribute,
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Input,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { WINDOW } from '@ng-web-apis/common';

@Directive({
  selector: 'textarea[prizmInput]',
})
export class PrizmTextareaDirective implements AfterViewInit {
  @Input() @HostBinding('style.height.px') height: number | null = null;

  @Input()
  @HostBinding('class.resizable')
  set resizable(state: boolean) {
    this._resizable = state;
  }
  get resizable() {
    return this._resizable;
  }

  @HostBinding('class.add-base-resize')
  get baseResizeClass() {
    if (!this.resizable) return false;
    if (!this.elementRef.nativeElement) return false;

    const currentStyle = this.windowRef
      .getComputedStyle(this.elementRef.nativeElement, null)
      .getPropertyValue('resize');

    return !currentStyle || currentStyle === 'none' || currentStyle === 'both';
  }

  private _resizable = false;
  private clone: HTMLTextAreaElement | null = null;
  constructor(
    @Host() private elementRef: ElementRef<HTMLTextAreaElement>,
    @Attribute('autoSize') private autoSize: unknown,
    private destroy$: PrizmDestroyService,
    @Inject(WINDOW) private readonly windowRef: Window
  ) {
    this.elementRef.nativeElement.rows = 1;
  }

  public ngAfterViewInit(): void {
    if (this.autoSize !== null) {
      this.setClone();

      fromEvent(window, 'resize')
        .pipe(debounceTime(100), takeUntil(this.destroy$))
        .subscribe(() => {
          this.setClone();
          this.elementRef.nativeElement.style.height = this.height
            ? Math.max(this.height, this.clone?.scrollHeight ?? 0) + 'px'
            : (this.clone?.scrollHeight ?? 0) + 'px';
        });
    }
  }

  @HostListener('valueChanged', ['$event']) private valueChanged(event: string): void {
    if (this.clone) {
      const nativeEl = this.elementRef.nativeElement;
      this.clone.value = nativeEl.value;

      nativeEl.style.height = this.height
        ? Math.max(this.height, this.clone.scrollHeight) + 'px'
        : this.clone.scrollHeight + 'px';
    }
  }

  private setClone(): void {
    if (this.clone) {
      this.clone.remove();
    }
    this.clone = this.elementRef.nativeElement.cloneNode(false) as HTMLTextAreaElement;
    this.clone.style.position = 'absolute';
    this.clone.style.left = '-100000px';
    this.clone.style.top = '0';
    this.clone.style.height = 'auto';
    this.clone.style.visibility = 'hidden';

    this.elementRef.nativeElement.parentElement?.appendChild(this.clone);
  }
}
