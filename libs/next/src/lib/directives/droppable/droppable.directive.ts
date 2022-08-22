import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';
import {filterNotNullish, ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {zuiTypedFromEvent} from '../../observables/typed-from-event';
import {zuiPreventDefault} from '../../observables/prevent-default';

@Directive({
    selector: '[zuiDroppableDropped], [zuiDroppableDragOverChange]',
    providers: [ZuiDestroyService],
})
export class ZuiDroppableDirective {
    @Output()
    readonly zuiDroppableDropped: Observable<DataTransfer>;

    @Output()
    readonly zuiDroppableDragOverChange: Observable<DataTransfer | null>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(ZuiDestroyService) destroy$: Observable<void>,
    ) {
        this.zuiDroppableDropped = zuiTypedFromEvent(nativeElement, 'drop').pipe(
            zuiPreventDefault(),
            map(event => event.dataTransfer),
            filterNotNullish()
        );

        this.zuiDroppableDragOverChange = zuiTypedFromEvent(nativeElement, 'dragenter').pipe(
            switchMap(({target, dataTransfer}) =>
                merge(
                    zuiTypedFromEvent(nativeElement, 'dragleave').pipe(
                        filter(event => event.target === target),
                    ),
                    zuiTypedFromEvent(nativeElement, 'drop'),
                ).pipe(mapTo(null), startWith(dataTransfer)),
            ),
            distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b)),
        );

        // Required by Drag and Drop API to stop redirecting
        zuiTypedFromEvent(nativeElement, 'dragover')
            .pipe(zuiPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
