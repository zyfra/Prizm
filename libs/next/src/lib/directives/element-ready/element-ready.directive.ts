import { Directive, ElementRef, Inject, Input, OnInit, Output } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';

@Directive({
    selector: '[zuiElementReady]',
    exportAs: 'zuiElementReady',
    providers: [PzmDestroyService]
})
export class ZuiElementReadyDirective implements OnInit {
    @Output()
    readonly ready$ = new ReplaySubject<boolean>();

    @Input()
    readonly interval = 1000/60

    @Input()
    checker: (el: ElementRef) => boolean= () => true;

    constructor(
        @Inject(ElementRef)
        private readonly element: ElementRef<HTMLInputElement>,
        private destroy$: PzmDestroyService
    ) {}

    ngOnInit(): void {
      interval(this.interval).pipe(
        filter(() => this.checker(this.element)),
        tap(() => this.ready$.next(true)),
        take(1),
        takeUntil(this.destroy$)
      ).subscribe()
    }

}
