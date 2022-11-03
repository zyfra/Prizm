import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';
import {PrizmOwnerDocumentException} from '../exceptions/owner-document.exception';

import {pzmMouseDragFinishFrom} from './mouse-drag-finish-from';
import {pzmTypedFromEvent} from './typed-from-event';

export interface PrizmPressedObservableOptions {
    onlyTrusted: boolean;
}

export function pzmPressedObservable(
    element: Element,
    {onlyTrusted}: PrizmPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new PrizmOwnerDocumentException();
    }

    return pzmTypedFromEvent(element, 'mousedown').pipe(
        filter(({isTrusted}) => isTrusted || !onlyTrusted),
        switchMapTo(
            pzmMouseDragFinishFrom(ownerDocument).pipe(
                mapTo(false),
                take(1),
                startWith(true),
            ),
        ),
    );
}
