import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { filterNotNullish, PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmTypedFromEvent } from '../../observables/typed-from-event';
import { prizmPreventDefault } from '../../observables/prevent-default';

@Directive({
  selector: '[prizmDroppableDropped], [prizmDroppableDragOverChange]',
  providers: [PrizmDestroyService],
})
export class PrizmDroppableDirective {
  @Output()
  readonly prizmDroppableDropped: Observable<DataTransfer>;

  @Output()
  readonly prizmDroppableDragOverChange: Observable<DataTransfer | null>;

  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(PrizmDestroyService) destroy$: Observable<void>
  ) {
    this.prizmDroppableDropped = prizmTypedFromEvent(nativeElement, 'drop').pipe(
      prizmPreventDefault(),
      map(event => event.dataTransfer),
      filterNotNullish()
    );

    this.prizmDroppableDragOverChange = prizmTypedFromEvent(nativeElement, 'dragenter').pipe(
      switchMap(({ target, dataTransfer }) =>
        merge(
          prizmTypedFromEvent(nativeElement, 'dragleave').pipe(filter(event => event.target === target)),
          prizmTypedFromEvent(nativeElement, 'drop')
        ).pipe(mapTo(null), startWith(dataTransfer))
      ),
      distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b))
    );

    // Required by Drag and Drop API to stop redirecting
    prizmTypedFromEvent(nativeElement, 'dragover')
      .pipe(prizmPreventDefault(), takeUntil(destroy$))
      .subscribe();
  }
}
