import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';
import {ZuiOwnerDocumentException} from '../exceptions/owner-document.exception';

import {zuiMouseDragFinishFrom} from './mouse-drag-finish-from';
import {zuiTypedFromEvent} from './typed-from-event';

export interface ZuiPressedObservableOptions {
    onlyTrusted: boolean;
}

export function zuiPressedObservable(
    element: Element,
    {onlyTrusted}: ZuiPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new ZuiOwnerDocumentException();
    }

    return zuiTypedFromEvent(element, 'mousedown').pipe(
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
