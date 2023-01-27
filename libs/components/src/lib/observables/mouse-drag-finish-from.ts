import { merge, Observable } from 'rxjs';

import { prizmTypedFromEvent } from './typed-from-event';

/**
 * Letting go of the mouse after it was pressed
 * @param target
 */
export function prizmMouseDragFinishFrom(target: any): Observable<any> {
  return merge(prizmTypedFromEvent(target, 'mouseup'), prizmTypedFromEvent(target, 'dragend'));
}
