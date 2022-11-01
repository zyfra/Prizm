import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function pzmStopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(e => {
        e.stopPropagation();
    });
}
