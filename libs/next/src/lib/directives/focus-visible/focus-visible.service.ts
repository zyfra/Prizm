import { ChangeDetectorRef, ElementRef, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { pzmWatch } from '../../observables/watch';
import { zuiFocusVisibleObservable } from '../../observables/focus-visible-observable';

/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Injectable()
export class PzmFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PzmDestroyService) destroy$: Observable<void>,
    ) {
        super(subscriber => this.focusVisible$.subscribe(subscriber));

        this.focusVisible$ = zuiFocusVisibleObservable(nativeElement).pipe(
            pzmWatch(changeDetectorRef),
            takeUntil(destroy$),
        );
    }
}
