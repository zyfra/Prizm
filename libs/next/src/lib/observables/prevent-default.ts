import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function zuiPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(event => event.preventDefault());
}
