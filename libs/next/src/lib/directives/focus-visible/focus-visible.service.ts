import { ChangeDetectorRef, ElementRef, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmWatch } from '../../observables/watch';
import { prizmFocusVisibleObservable } from '../../observables/focus-visible-observable';

/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Injectable()
export class PrizmFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PrizmDestroyService) destroy$: Observable<void>,
    ) {
        super(subscriber => this.focusVisible$.subscribe(subscriber));

        this.focusVisible$ = prizmFocusVisibleObservable(nativeElement).pipe(
            prizmWatch(changeDetectorRef),
            takeUntil(destroy$),
        );
    }
}
