import {TuiOwnerDocumentException} from '@taiga-ui/cdk/exceptions';
import {Observable} from 'rxjs';
import {filter, mapTo, startWith, switchMapTo, take} from 'rxjs/operators';

import {zuiMouseDragFinishFrom} from './zui-mouse-drag-finish-from';
import {zuiTypedFromEvent} from './zui-typed-from-event';

export interface ZuiPressedObservableOptions {
    onlyTrusted: boolean;
}

export function zuiPressedObservable(
    element: Element,
    {onlyTrusted}: ZuiPressedObservableOptions = {onlyTrusted: true},
): Observable<boolean> {
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new TuiOwnerDocumentException();
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
