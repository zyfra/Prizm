import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { PrizmDestroyService, prizmFromMutationObserver$ } from '@prizm-ui/helpers';
import { switchMap, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { PrizmAutoResizeMode } from './model';

@Directive({
  selector: `[prizmAutoResize]`,
})
export class PrizmAutoResizeDirective implements OnInit, AfterViewInit {
  @Input() prizmAutoResize = true;
  @Input() autoResizeMode: PrizmAutoResizeMode = 'both';
  get scrollHeight(): number {
    return this.elementRef.nativeElement.scrollHeight;
  }
  constructor(private elementRef: ElementRef<HTMLTextAreaElement>, private destroy: PrizmDestroyService) {}

  @HostListener(':input')
  private onInput() {
    this.resizeIfActive();
  }

  private resizeIfActive(): void {
    if (!this.prizmAutoResize) return;
    this.resize();
  }

  public ngOnInit(): void {
    if (!this.prizmAutoResize) return;
    if (this.elementRef.nativeElement.scrollHeight) {
      setTimeout(() => this.resize());
    }
  }

  public resize(): void {
    const previousElementHeight = this.elementRef.nativeElement.clientHeight;
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height =
      (this.autoResizeMode === 'only-increase' && previousElementHeight >= this.scrollHeight
        ? previousElementHeight
        : this.scrollHeight) + 'px';
  }

  ngAfterViewInit(): void {
    timer(0)
      .pipe(
        switchMap(() =>
          prizmFromMutationObserver$(this.elementRef.nativeElement, {
            attributes: true,
            characterData: true,
          }).pipe(
            // guard for infinite re invokes
            throttleTime(100),
            tap(() => {
              this.resizeIfActive();
            })
          )
        ),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
}
