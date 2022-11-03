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
import {filterNotNullish, PrizmDestroyService} from "@digital-plant/zyfra-helpers";
import {pzmTypedFromEvent} from '../../observables/typed-from-event';
import {pzmPreventDefault} from '../../observables/prevent-default';

@Directive({
    selector: '[pzmDroppableDropped], [pzmDroppableDragOverChange]',
    providers: [PrizmDestroyService],
})
export class PrizmDroppableDirective {
    @Output()
    readonly pzmDroppableDropped: Observable<DataTransfer>;

    @Output()
    readonly pzmDroppableDragOverChange: Observable<DataTransfer | null>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(PrizmDestroyService) destroy$: Observable<void>,
    ) {
        this.pzmDroppableDropped = pzmTypedFromEvent(nativeElement, 'drop').pipe(
            pzmPreventDefault(),
            map(event => event.dataTransfer),
            filterNotNullish()
        );

        this.pzmDroppableDragOverChange = pzmTypedFromEvent(nativeElement, 'dragenter').pipe(
            switchMap(({target, dataTransfer}) =>
                merge(
                    pzmTypedFromEvent(nativeElement, 'dragleave').pipe(
                        filter(event => event.target === target),
                    ),
                    pzmTypedFromEvent(nativeElement, 'drop'),
                ).pipe(mapTo(null), startWith(dataTransfer)),
            ),
            distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b)),
        );

        // Required by Drag and Drop API to stop redirecting
        pzmTypedFromEvent(nativeElement, 'dragover')
            .pipe(pzmPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
