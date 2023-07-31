import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { PrizmDestroyService, prizmFromMutationObserver$ } from '@prizm-ui/helpers';
import { skip, switchMap, takeUntil, tap, throttleTime } from 'rxjs/operators';

@Directive({
  selector: `[prizmAutoResize]`,
})
export class PrizmAutoResizeDirective implements OnInit, AfterViewInit {
  @Input() prizmAutoResize = true;
  private readonly subject = new Subject<void>();
  get scrollHeight(): number {
    return this.elementRef.nativeElement.scrollHeight;
  }
  constructor(private elementRef: ElementRef, private destroy: PrizmDestroyService) {}

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
    this.elementRef.nativeElement.style.height = '0';
    this.elementRef.nativeElement.style.height = this.scrollHeight + 'px';
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
