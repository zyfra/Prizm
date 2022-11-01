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
import {filterNotNullish, PzmDestroyService} from "@digital-plant/zyfra-helpers";
import {pzmTypedFromEvent} from '../../observables/typed-from-event';
import {pzmPreventDefault} from '../../observables/prevent-default';

@Directive({
    selector: '[zuiDroppableDropped], [zuiDroppableDragOverChange]',
    providers: [PzmDestroyService],
})
export class ZuiDroppableDirective {
    @Output()
    readonly zuiDroppableDropped: Observable<DataTransfer>;

    @Output()
    readonly zuiDroppableDragOverChange: Observable<DataTransfer | null>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(PzmDestroyService) destroy$: Observable<void>,
    ) {
        this.zuiDroppableDropped = pzmTypedFromEvent(nativeElement, 'drop').pipe(
            pzmPreventDefault(),
            map(event => event.dataTransfer),
            filterNotNullish()
        );

        this.zuiDroppableDragOverChange = pzmTypedFromEvent(nativeElement, 'dragenter').pipe(
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
