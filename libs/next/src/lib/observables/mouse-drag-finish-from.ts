import {merge, Observable} from 'rxjs';

import {pzmTypedFromEvent} from './typed-from-event';

/**
 * Letting go of the mouse after it was pressed
 * @param target
 */
export function pzmMouseDragFinishFrom(target: any): Observable<any> {
    return merge(pzmTypedFromEvent(target, 'mouseup'), pzmTypedFromEvent(target, 'dragend'));
}
