import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';
import {PrizmOwnerDocumentException} from '../exceptions/owner-document.exception';

import {prizmMouseDragFinishFrom} from './mouse-drag-finish-from';
import {prizmTypedFromEvent} from './typed-from-event';

export interface PrizmPressedObservableOptions {
    onlyTrusted: boolean;
}

export function prizmPressedObservable(
    element: Element,
    {onlyTrusted}: PrizmPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new PrizmOwnerDocumentException();
    }

    return prizmTypedFromEvent(element, 'mousedown').pipe(
        filter(({isTrusted}) => isTrusted || !onlyTrusted),
        switchMapTo(
            prizmMouseDragFinishFrom(ownerDocument).pipe(
                mapTo(false),
                take(1),
                startWith(true),
            ),
        ),
    );
}
