import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';
import {PzmOwnerDocumentException} from '../exceptions/owner-document.exception';

import {zuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {pzmTypedFromEvent} from './typed-from-event';

export interface ZuiPressedObservableOptions {
    onlyTrusted: boolean;
}

export function pzmPressedObservable(
    element: Element,
    {onlyTrusted}: ZuiPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new PzmOwnerDocumentException();
    }

    return pzmTypedFromEvent(element, 'mousedown').pipe(
        filter(({isTrusted}) => isTrusted || !onlyTrusted),
        switchMapTo(
            zuiMouseDragFinishFrom(ownerDocument).pipe(
                mapTo(false),
                take(1),
                startWith(true),
            ),
        ),
    );
}
