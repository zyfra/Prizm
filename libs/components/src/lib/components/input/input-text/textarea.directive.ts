import {
  AfterViewInit,
  Attribute,
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'textarea[prizmInput]',
})
export class PrizmTextareaDirective implements AfterViewInit {
  @Input() @HostBinding('style.height.px') height: number | null = null;

  private clone: HTMLTextAreaElement | null = null;
  constructor(
    @Host() private elementRef: ElementRef<HTMLTextAreaElement>,
    @Attribute('autoSize') private autoSize: any,
    private destroy$: PrizmDestroyService
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
            ? Math.max(this.height, this.clone.scrollHeight) + 'px'
            : this.clone.scrollHeight + 'px';
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

    this.elementRef.nativeElement.parentElement.appendChild(this.clone);
  }
}
