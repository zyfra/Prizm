import {merge, Observable} from 'rxjs';

import {zuiTypedFromEvent} from './zui-typed-from-event';

/**
 * Letting go of the mouse after it was pressed
 * @param target
 */
export function zuiMouseDragFinishFrom(target: any): Observable<any> {
    return merge(zuiTypedFromEvent(target, 'mouseup'), zuiTypedFromEvent(target, 'dragend'));
}
