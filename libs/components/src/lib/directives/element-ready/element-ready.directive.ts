import { Directive, ElementRef, Inject, Input, OnInit, Output } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: '[prizmElementReady]',
  exportAs: 'prizmElementReady',
  providers: [PrizmDestroyService],
})
export class PrizmElementReadyDirective implements OnInit {
  @Output()
  readonly ready$ = new ReplaySubject<boolean>();

  @Input()
  readonly interval = 1000 / 60;

  @Input()
  checker: (el: ElementRef) => boolean = () => true;

  constructor(
    @Inject(ElementRef)
    private readonly element: ElementRef<HTMLInputElement>,
    private destroy$: PrizmDestroyService
  ) {}

  ngOnInit(): void {
    interval(this.interval)
      .pipe(
        filter(() => this.checker(this.element)),
        tap(() => this.ready$.next(true)),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
