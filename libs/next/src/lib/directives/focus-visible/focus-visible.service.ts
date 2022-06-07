import {ChangeDetectorRef, ElementRef, Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {zuiWatch} from '../../observables/watch';
import {zuiFocusVisibleObservable} from "../../observables/focus-visible-observable";

/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 * @dynamic
 */
@Injectable()
export class ZuiFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ZuiDestroyService) destroy$: Observable<void>,
    ) {
        super(subscriber => this.focusVisible$.subscribe(subscriber));

        this.focusVisible$ = zuiFocusVisibleObservable(nativeElement).pipe(
            zuiWatch(changeDetectorRef),
            takeUntil(destroy$),
        );
    }
}
